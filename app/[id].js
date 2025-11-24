import { ActivityIndicator, Image, ScrollView, StyleSheet } from "react-native";
import { Link, Stack, useLocalSearchParams } from "expo-router";

import Screen from "@ui/Screen";
import TextStyle from "@ui/TextStyle";
import theme from "@constants/theme";
import useArticle from "@hooks/useArticle";
import { BackArrowIcon } from "@constants/icons";
import AnimatedIconButton from "@ui/AnimatedIconButton";

import HeaderRightDetail from "@components/HeaderRightDetail";
import useFavoritesNewsStore from "@store/useFavoritesNewsStore";

const DetailArticleScreen = () => {
  const { id } = useLocalSearchParams();
  const { toggleFavorite, isFavorite } = useFavoritesNewsStore();
  const { article, loading, error } = useArticle(id);

  const marked = article?.id ? isFavorite(article.id) : false;
  const handleToggleFavorite = () => article && toggleFavorite(article);

  return (
    <Screen paddingHorizontal={0}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: theme.colors.surface },
          headerLeft: () => (
            <Link asChild href="/">
              <AnimatedIconButton variant="pop" style={{ padding: 6 }}>
                <BackArrowIcon color={theme.colors.warning} />
              </AnimatedIconButton>
            </Link>
          ),
          headerTintColor: theme.colors.accent,
          headerRight: () => (
            <HeaderRightDetail
              toggleBookmark={handleToggleFavorite}
              bookmarked={marked}
              articleUrl={article?.url}
            />
          ),
        }}
      />
      <Image source={{ uri: article?.urlToImage }} style={styles.cover} />
      <ScrollView contentContainerStyle={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color={theme.colors.textPrimary} />
        ) : error ? (
          <TextStyle color={theme.colors.warning} align="center">
            {error}
          </TextStyle>
        ) : (
          <Screen>
            {article?.author ? (
              <TextStyle
                fontSize={theme.fontSizes.author}
                color={theme.colors.warning}
              >
                {article.author}
              </TextStyle>
            ) : null}
            <Screen style={{ paddingHorizontal: 0, gap: 16 }}>
              <TextStyle fontSize={theme.fontSizes.heading} fontWeight="bold">
                {article?.title}
              </TextStyle>
              <TextStyle color={theme.colors.textSecondary}>
                {article.description}
              </TextStyle>
            </Screen>
          </Screen>
        )}
      </ScrollView>
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    paddingTop: 16,
  },
  cover: {
    elevation: 10,
    height: 240,
    shadowColor: theme.colors.background,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    width: "100%",
  },
});

export default DetailArticleScreen;
