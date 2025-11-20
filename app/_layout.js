import { Stack } from "expo-router";
import theme from "..@constants/theme";
import { Logo } from "..@ui/icons";
import NameLogo from "..@ui/NameLogo";
import { StatusBar } from "react-native";

const Layout = () => {
  return (
    <>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="light-content"
      />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.background,
            shadowColor: "transparent",
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerShadowVisible: false,
          headerTitle: "",
          headerLeft: () => <Logo color={theme.colors.textTitle} />,
          headerRight: () => <NameLogo />,
        }}
      />
    </>
  );
};

export default Layout;
