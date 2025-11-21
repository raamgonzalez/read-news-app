import { Animated, Image, Pressable, StyleSheet, View } from "react-native";
import TextStyle from "@ui/TextStyle";
import theme from "@constants/theme";
import { useEffect, useRef } from "react";
import { Link } from "expo-router";
import useFavoritesNewsStore from "@store/useFavoritesNewsStore";
import IconBookMark from "../IconBookmark";

const getArticleParam = (article) =>
  article?.id ?? article?.url ?? article?.title ?? "article";

export const ArticleItem = ({ article }) => {
  const articleParam = getArticleParam(article);
  return (
    <Link
      asChild
      href={{
        pathname: "/[id]",
        params: { id: articleParam },
      }}
    >
      <Pressable>
        <View style={styles.articleCard}>
          <View style={styles.contentCard}>
            {article.source?.name ? (
              <TextStyle
                fontSize={theme.fontSizes.author}
                style={{ fontStyle: "italic" }}
                color={theme.colors.warning}
              >
                {article.source.name}
              </TextStyle>
            ) : null}
            <TextStyle
              fontSize={theme.fontSizes.subheading}
              fontWeight={theme.fontWeights.semiBold}
            >
              {article.title}
            </TextStyle>
            <Image
              style={styles.articleImage}
              source={{ uri: article.urlToImage }}
            />
          </View>
        </View>
      </Pressable>
    </Link>
  );
};

export function AnimatedArticleItem({ article, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <ArticleItem article={article} />
    </Animated.View>
  );
}

export const BookmarkArticleItem = ({ article }) => {
  const articleParam = getArticleParam(article);
  const { toggleFavorite, isFavorite } = useFavoritesNewsStore();
  const marked = article?.id ? isFavorite(article.id) : false;
  const handleToggleFavorite = () => article && toggleFavorite(article);
  return (
    <Link
      asChild
      href={{
        pathname: "/[id]",
        params: { id: articleParam },
      }}
    >
      <Pressable style={styles.bookmarkRow}>
        <Image
          style={styles.bookmarkImage}
          source={{ uri: article.urlToImage }}
          resizeMode="cover"
        />
        <View style={styles.bookmarkContent}>
          <TextStyle
            fontSize={theme.fontSizes.subheading}
            fontWeight={theme.fontWeights.semiBold}
            numberOfLines={2}
          >
            {article.title}
          </TextStyle>
          {article.source?.name ? (
            <TextStyle
              fontSize={theme.fontSizes.author}
              color={theme.colors.textSecondary}
            >
              {article.source.name}
            </TextStyle>
          ) : null}
        </View>
        <View style={{ alignSelf: "flex-start" }}>
          <IconBookMark
            toggleBookmark={handleToggleFavorite}
            bookmarked={marked}
            size={20}
          />
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  articleCard: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    paddingVertical: 12,
  },
  articleImage: {
    borderRadius: theme.borderRadius.medium,
    height: 240,
    marginTop: 16,
    overflow: "hidden",
    width: "100%",
  },
  bookmarkContent: {
    flex: 1,
    gap: 4,
  },
  bookmarkImage: {
    backgroundColor: theme.colors.skeletonBlock,
    borderRadius: theme.borderRadius.medium,
    height: 64,
    width: 64,
  },
  bookmarkRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    paddingVertical: 12,
  },
  contentCard: { flex: 1, gap: 4, justifyContent: "center" },
});
