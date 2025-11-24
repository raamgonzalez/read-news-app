import { ScrollView, StyleSheet, View } from "react-native";

import Screen from "@ui/Screen";
import TextStyle from "@ui/TextStyle";
import theme from "@constants/theme";
import { useTranslation } from "react-i18next";

const AboutScreen = () => {
  const { t } = useTranslation("translation");
  const badges = [
    "expo",
    "router",
    "reactNative",
    "hooks",
    "api",
    "animations",
    "reactQuery",
    "zustand",
    "tests",
  ];
  const featureItems = t("about.features", { returnObjects: true }) || [];
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
            {badges.map((key) => (
              <View key={key} style={styles.badge}>
                <TextStyle
                  fontWeight={theme.fontWeights.bold}
                  color={theme.colors.background}
                >
                  {t(`about.badges.${key}`)}
                </TextStyle>
              </View>
            ))}
          </View>
          <TextStyle style={styles.body}>{t("about.toolsBody")}</TextStyle>
        </View>

        {featureItems.length ? (
          <View style={styles.card}>
            <TextStyle fontWeight={theme.fontWeights.bold}>
              {t("about.featuresTitle")}
            </TextStyle>
            <TextStyle style={styles.body}>
              {t("about.featuresDescription")}
            </TextStyle>
            <View style={styles.featureList}>
              {featureItems.map((feature, index) => (
                <View key={`${feature}-${index}`} style={styles.featureItem}>
                  <TextStyle style={styles.featureBullet}>•</TextStyle>
                  <TextStyle style={styles.featureText}>{feature}</TextStyle>
                </View>
              ))}
            </View>
          </View>
        ) : null}
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
    gap: 24,
    paddingVertical: 8,
  },
  featureBullet: {
    color: theme.colors.background,
  },
  featureItem: {
    flexDirection: "row",
    gap: 8,
  },
  featureList: {
    gap: 8,
    marginTop: 12,
  },
  featureText: {
    color: theme.colors.textSecondary,
    flex: 1,
    lineHeight: 20,
  },
});

export default AboutScreen;
