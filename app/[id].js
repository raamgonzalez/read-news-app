import { Link } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import Screen from "../src/ui/Screen";

const Detail = () => {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <Link href="/">{id}</Link>
        </View>
      </ScrollView>
    </Screen>
  );
};
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
    padding: 16,
  },
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
});

export default Detail;
