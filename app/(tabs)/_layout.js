import { Image } from "react-native";
import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";
import {
  BookMarkIconOutline,
  CircleInfoIcon,
  HomeIcon,
  UserIcon,
  UsersIcon,
} from "@constants/icons";
import theme from "@constants/theme";
import AnimatedTabButton from "@ui/AnimatedTabButton";
import useAuthStore from "@store/useAuthStore";

const AVATAR_PLACEHOLDER = "https://i.pravatar.cc/100?img=32";

const Layout = () => {
  const { t } = useTranslation();
  const { user, token } = useAuthStore();
  const isLoggedIn = Boolean(token);

  const avatarSource = user?.avatar
    ? { uri: user.avatar }
    : { uri: AVATAR_PLACEHOLDER };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          elevation: 8,
          shadowColor: "#000",
          shadowOpacity: 0.12,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 4 },
          borderTopWidth: 0,
          borderRadius: 32,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          marginHorizontal: 16,
          marginBottom: 16,
          height: 64,
          paddingHorizontal: 12,
          paddingVertical: 8,
        },
        tabBarActiveTintColor: theme.colors.background,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarHideOnKeyboard: true,
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
          href: isLoggedIn ? "/bookmarks" : null,
        }}
      />
      <Tabs.Screen
        name="users"
        options={{
          title: t("tabs.users"),
          tabBarIcon: ({ color }) => <UsersIcon color={color} />,
          href: isLoggedIn ? "/users" : null,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: t("tabs.user"),
          tabBarIcon: () => (
            <Image
              source={avatarSource}
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                borderWidth: 2,
                borderColor: theme.colors.background,
              }}
            />
          ),
          href: isLoggedIn ? "/user" : null,
        }}
      />
      <Tabs.Screen
        name="login"
        options={{
          title: t("tabs.login"),
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
          href: isLoggedIn ? null : "/login",
        }}
      />
    </Tabs>
  );
};
export default Layout;
