import { StyleSheet, View, Image } from "react-native";
import { useRouter } from "expo-router";
import Screen from "@ui/Screen";
import TextStyle from "@ui/TextStyle";
import AnimatedIconButton from "@ui/AnimatedIconButton";
import theme from "@constants/theme";
import useAuthStore from "@store/useAuthStore";
import { AVATAR_PLACEHOLDER } from "@constants/mocks";

const UserScreen = () => {
  const router = useRouter();
  const { user, clearSession } = useAuthStore();

  const displayName = user?.name ?? "Invitado";
  const email = user?.email ?? "sin-email@demo.com";
  const avatarSource = user?.avatar
    ? { uri: user.avatar }
    : { uri: AVATAR_PLACEHOLDER };

  const handleLogout = () => {
    clearSession();
    router.replace("/");
  };

  return (
    <Screen>
      <View style={styles.card}>
        <View style={styles.profileRow}>
          <Image source={avatarSource} style={styles.avatar} />
          <View style={{ flex: 1 }}>
            <TextStyle fontSize={24} fontWeight={theme.fontWeights.bold}>
              {displayName}
            </TextStyle>
            <TextStyle color={theme.colors.textSecondary}>{email}</TextStyle>
          </View>
        </View>

        <View style={styles.separator} />

        <View style={styles.infoRow}>
          <TextStyle color={theme.colors.textSecondary}>Plan</TextStyle>
          <TextStyle fontWeight={theme.fontWeights.bold}>Demo</TextStyle>
        </View>
        <View style={styles.infoRow}>
          <TextStyle color={theme.colors.textSecondary}>
            Sesión activa
          </TextStyle>
          <TextStyle fontWeight={theme.fontWeights.bold}>
            {user ? "Sí" : "No"}
          </TextStyle>
        </View>
        <View style={styles.infoRow}>
          <TextStyle color={theme.colors.textSecondary}>
            Último ingreso
          </TextStyle>
          <TextStyle fontWeight={theme.fontWeights.bold}>
            {new Date().toLocaleString()}
          </TextStyle>
        </View>
      </View>

      <AnimatedIconButton
        variant="shrink"
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <TextStyle
          fontWeight={theme.fontWeights.bold}
          color={theme.colors.surface}
        >
          Cerrar sesión
        </TextStyle>
      </AnimatedIconButton>
    </Screen>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 48,
    height: 96,
    width: 96,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderRadius: 12,
    borderWidth: 1,
    gap: 4,
    marginTop: 12,
    padding: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  logoutButton: {
    alignItems: "center",
    backgroundColor: theme.colors.warning,
    borderRadius: 10,
    marginTop: 24,
    paddingVertical: 12,
  },
  profileRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
  separator: {
    borderTopColor: theme.colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    marginVertical: 16,
  },
});

export default UserScreen;
