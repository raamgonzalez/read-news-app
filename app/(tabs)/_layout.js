import { Tabs } from "expo-router";

import {
  BookMarkIconOutline,
  CircleInfoIcon,
  HomeIcon,
  UserIcon,
} from "@ui/icons";
import theme from "@constants/theme";
import AnimatedTabButton from "@ui/AnimatedTabButton";

const Layout = () => {
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
          paddingVertical: 4,
        },
        headerStyle: { justifyContent: "center", alignItems: "center" },
        tabBarActiveTintColor: theme.colors.background,
        tabBarItemStyle: { justifyContent: "center", alignItems: "center" },
        tabBarLabelStyle: { marginTop: 0 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          tabBarButton: (props) => <AnimatedTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarIcon: ({ color }) => <CircleInfoIcon color={color} />,
          tabBarButton: (props) => <AnimatedTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="bookmarks"
        options={{
          title: "Marks",
          tabBarIcon: ({ color }) => (
            <BookMarkIconOutline marginTop={50} color={color} />
          ),
          tabBarButton: (props) => <AnimatedTabButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          title: "Users",
          tabBarIcon: ({ color }) => <UserIcon color={color} />,
          tabBarButton: (props) => <AnimatedTabButton {...props} />,
        }}
      />
    </Tabs>
  );
};
export default Layout;
