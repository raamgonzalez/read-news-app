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

const UserCard = ({ user }) => {
  const nameParts = [user.firstname, user.lastname].filter(Boolean);
  const fullName = nameParts.join(" ") || "Usuario sin nombre";
  const city = user.address?.city;
  const company = user.company?.name;

  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardTap]}
    >
      <TextStyle fontWeight={theme.fontWeights.bold} fontSize={16}>
        {fullName}
      </TextStyle>
      <TextStyle color={theme.colors.textSecondary}>{user.email}</TextStyle>
      <View style={styles.metaRow}>
        <TextStyle color={theme.colors.textSecondary}>{company}</TextStyle>
        <TextStyle color={theme.colors.textSecondary}>{city}</TextStyle>
      </View>
    </Pressable>
  );
};

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

const UserScreen = () => {
  const { users, loading, error, refreshing, refresh, reload } = useUsers();

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <Screen>
      <View style={{ paddingTop: 8 }}>
        <FlatList
          data={users}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <UserCard user={item} />}
          ItemSeparatorComponent={renderSeparator}
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
  card: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.background,
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
  },
  cardTap: {
    opacity: 0.92,
    transform: [{ scale: 0.995 }],
  },
  emptyState: {
    alignItems: "center",
    gap: 12,
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
  metaRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
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
