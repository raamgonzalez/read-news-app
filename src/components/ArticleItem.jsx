import { Animated, Image, Pressable, StyleSheet, View } from "react-native";
import TextStyle from "../ui/TextStyle";
import theme from "../constants/theme";
import { useEffect, useRef } from "react";
import { Link } from "expo-router";

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
              <TextStyle fontSize={theme.fontSizes.author}>
                {article.source.name}
              </TextStyle>
            ) : null}
            <TextStyle fontSize={theme.fontSizes.subheading} fontWeight="bold">
              {article.title}
            </TextStyle>
          </View>
          <Image
            style={styles.articleImage}
            source={{ uri: article.urlToImage }}
          />
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

const styles = StyleSheet.create({
  articleCard: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    paddingVertical: 12,
  },
  articleImage: { borderRadius: 4, height: 64, overflow: "hidden", width: 64 },
  contentCard: { flex: 1, gap: 4, justifyContent: "center" },
});
