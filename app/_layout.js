import { Stack } from "expo-router";
import theme from "@constants/theme";
import { Logo } from "@ui/icons";
import NameLogo from "@ui/NameLogo";
import { Pressable, StatusBar, View } from "react-native";
import { I18nextProvider, useTranslation } from "react-i18next";
import TextStyle from "@ui/TextStyle";
import "../src/i18n";
import i18n from "../src/i18n";
import QueryProvider from "../src/providers/QueryProvider";

const Layout = () => {
  const { i18n: i18 } = useTranslation();
  const toggleLanguage = () => {
    const next = i18.language === "es" ? "en" : "es";
    i18.changeLanguage(next);
  };
  const currentLang = i18.language || "en";
  const nextLabel = currentLang.startsWith("es") ? "EN" : "ES";

  return (
    <I18nextProvider i18n={i18n}>
      <StatusBar
        backgroundColor={theme.colors.background}
        barStyle="light-content"
      />
      <QueryProvider>
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
            headerLeft: () => (
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 16 }}
              >
                <Logo color={theme.colors.textTitle} />
                <Pressable
                  onPress={toggleLanguage}
                  style={{ fontWeight: theme.fontWeights.bold }}
                  color={theme.colors.accent}
                >
                  <TextStyle
                    fontSize={theme.fontSizes.heading}
                    fontWeight={theme.fontWeights.bold}
                    color={theme.colors.accent}
                  >
                    {nextLabel}
                  </TextStyle>
                </Pressable>
              </View>
            ),
            headerRight: () => <NameLogo />,
          }}
        />
      </QueryProvider>
    </I18nextProvider>
  );
};

export default Layout;
