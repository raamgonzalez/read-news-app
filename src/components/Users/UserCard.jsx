import { Pressable, StyleSheet, View } from "react-native";
import TextStyle from "@ui/TextStyle";
import theme from "@constants/theme";

const UserCard = ({ user }) => {
  const nameParts = [user.firstname, user.lastname].filter(Boolean);
  const fullName = nameParts.join(" ") || "Usuario sin nombre";
  const city = user.address?.city;
  const company = user.company?.name;

  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.cardTap]}>
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

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.border,
    borderRadius: 14,
    borderWidth: 1,
    padding: 16,
  },
  cardTap: {
    opacity: 0.92,
    transform: [{ scale: 0.995 }],
  },
  metaRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 6,
  },
});

export default UserCard;
