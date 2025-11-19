import Constants from "expo-constants";
import { View } from "react-native";
import TextStyle from "../ui/TextStyle";
import theme from "../theme";
import { StyleSheet } from "react-native";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <TextStyle
        color={theme.appBar.primary}
        fontWeight="bold"
        fontFamily={theme.fonts.serif}
        fontSize={25}
      >
        NewsPapers
      </TextStyle>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingTop: Constants.statusBarHeight + 20,
  },
});

export default AppBar;
