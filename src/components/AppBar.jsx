import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

import TextStyle from "../ui/TextStyle";
import theme from "../constants/theme";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link href="/" asChild>
        <TextStyle
          color={theme.appBar.primary}
          fontWeight="bold"
          fontFamily={theme.fonts.serif}
          fontSize={25}
        >
          NewsPapers
        </TextStyle>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 16,
  },
});

export default AppBar;
