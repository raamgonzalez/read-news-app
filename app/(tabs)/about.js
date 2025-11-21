import { ScrollView, StyleSheet, View } from "react-native";

import Screen from "@ui/Screen";
import TextStyle from "@ui/TextStyle";
import theme from "@constants/theme";
import { useTranslation } from "react-i18next";

const AboutScreen = () => {
  const { t } = useTranslation("translation");
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <TextStyle
            fontSize={theme.fontSizes.heading}
            fontWeight={theme.fontWeights.bold}
          >
            {t("about.title")}
          </TextStyle>
          <TextStyle style={styles.body}>{t("about.description1")}</TextStyle>
          <TextStyle style={styles.body}>{t("about.description2")}</TextStyle>
        </View>

        <View style={styles.card}>
          <TextStyle fontWeight={theme.fontWeights.bold}>
            {t("about.authorTitle")}
          </TextStyle>
          <TextStyle style={styles.body}>{t("about.authorBody")}</TextStyle>
        </View>

        <View style={styles.card}>
          <TextStyle fontWeight={theme.fontWeights.bold}>
            {t("about.toolsTitle")}
          </TextStyle>
          <View style={styles.badges}>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                {t("about.badges.expo")}
              </TextStyle>
            </View>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                {t("about.badges.router")}
              </TextStyle>
            </View>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                {t("about.badges.reactNative")}
              </TextStyle>
            </View>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                {t("about.badges.hooks")}
              </TextStyle>
            </View>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                {t("about.badges.api")}
              </TextStyle>
            </View>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                {t("about.badges.animations")}
              </TextStyle>
            </View>
          </View>
          <TextStyle style={styles.body}>{t("about.toolsBody")}</TextStyle>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: theme.colors.accent,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badges: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginVertical: 10,
  },
  body: {
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginTop: 4,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
  },
  container: {
    backgroundColor: theme.colors.surface,
    flexGrow: 1,
    gap: 16,
    paddingBottom: 16,
    paddingTop: 8,
  },
});

export default AboutScreen;
