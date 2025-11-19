import { Stack } from "expo-router";
import { View } from "react-native";
import theme from "../src/constants/theme";
import AppBar from "../src/components/AppBar";
import { Logo } from "../src/ui/icons";

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.colors.background },
          headerTintColor: theme.colors.textPrimary,
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => <AppBar />,
        }}
      />
    </View>
  );
};

export default Layout;
