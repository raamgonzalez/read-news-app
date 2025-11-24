import {
  ActivityIndicator,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import Screen from "@ui/Screen";
import TextStyle from "@ui/TextStyle";
import theme from "@constants/theme";
import useUsers from "@hooks/useUsers";
import UserCard from "@components/Users/UserCard";

const EmptyState = ({ error, onRetry }) => (
  <View style={styles.emptyState}>
    <TextStyle fontWeight={theme.fontWeights.bold} fontSize={18}>
      {error ? "No pudimos cargar los usuarios" : "Sin usuarios"}
    </TextStyle>
    <TextStyle color={theme.colors.textSecondary} align="center">
      {error
        ? "Hubo un problema al contactar el servicio. Intenta de nuevo."
        : "Cuando haya usuarios los veras aqui."}
    </TextStyle>
    <Pressable onPress={onRetry} style={styles.retryButton}>
      <TextStyle
        fontWeight={theme.fontWeights.bold}
        color={theme.colors.background}
      >
        Reintentar
      </TextStyle>
    </Pressable>
  </View>
);

const renderSeparator = () => <View style={styles.separator} />;

const UserScreen = () => {
  const { users, loading, error, refreshing, refresh, reload } = useUsers();

  const ITEM_HEIGHT = 112;

  return (
    <Screen>
      <View style={{ paddingTop: 8 }}>
        <FlatList
          data={users}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <UserCard user={item} />}
          ItemSeparatorComponent={renderSeparator}
          initialNumToRender={6}
          contentContainerStyle={[
            styles.listContainer,
            (loading || error || users.length === 0) && styles.listCentered,
          ]}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={refresh}
              tintColor={theme.colors.background}
              colors={[theme.colors.background]}
            />
          }
          getItemLayout={(_, index) => ({
            length: ITEM_HEIGHT,
            offset: ITEM_HEIGHT * index,
            index,
          })}
          ListEmptyComponent={
            loading ? (
              <ActivityIndicator size="large" color={theme.colors.background} />
            ) : (
              <EmptyState error={Boolean(error)} onRetry={reload} />
            )
          }
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  emptyState: {
    alignItems: "center",
    flex: 1,
    gap: 12,
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 24,
  },
  listCentered: {
    flexGrow: 1,
    justifyContent: "center",
  },
  listContainer: {
    paddingVertical: 8,
  },
  retryButton: {
    backgroundColor: theme.colors.accent,
    borderRadius: 999,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  separator: {
    height: 12,
  },
});

export default UserScreen;
