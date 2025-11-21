import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

import {
  BookMarkIconOutline,
  CircleInfoIcon,
  HomeIcon,
  UserIcon,
} from "@ui/icons";
import theme from "@constants/theme";
import AnimatedTabButton from "@ui/AnimatedTabButton";

const Layout = () => {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          elevation: 0,
          shadowColor: "transparent",
          borderTopWidth: 1,
          alignItems: "center",
          paddingTop: 4,
        },
        headerStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarActiveTintColor: theme.colors.background,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("tabs.home"),
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarButton: (props) => <AnimatedTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: t("tabs.about"),
          tabBarIcon: ({ color }) => <CircleInfoIcon color={color} />,
          tabBarButton: (props) => <AnimatedTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: t("tabs.bookmarks"),
          tabBarIcon: ({ color }) => <BookMarkIconOutline color={color} />,
          tabBarButton: (props) => <AnimatedTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: t("tabs.users"),
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
          tabBarButton: (props) => <AnimatedTabButton {...props} />,
        }}
      />
    </Tabs>
  );
};
export default Layout;
