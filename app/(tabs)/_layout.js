import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

import {
  BookMarkIconOutline,
  CircleInfoIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
} from "@ui/icons";
import theme from "@constants/theme";
import AnimatedTabButton from "@ui/AnimatedTabButton";
import useAuthStore from "@store/useAuthStore";

const Layout = () => {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuthStore();

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
          // tabBarButton: (props) => <AnimatedTabButton {...props} />,
          href: isAuthenticated() ? "/bookmarks" : null,
        }}
      />
      {/* //TODO: REVISAR POR QUE PIERDE ANIMACIÓN */}
      <Tabs.Screen
        name="login"
        options={{
          title: t("tabs.login"),
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
          href: isAuthenticated() ? null : "/login",
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: t("tabs.users"),
          tabBarIcon: ({ color }) => <UsersIcon color={color} />,
          // tabBarButton: (props) => <AnimatedTabButton {...props} />,
          href: isAuthenticated() ? "/users" : null,
        }}
      />
    </Tabs>
  );
};
export default Layout;
