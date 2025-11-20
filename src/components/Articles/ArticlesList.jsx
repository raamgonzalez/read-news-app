import { FlatList, StyleSheet, View } from "react-native";
import { AnimatedArticleItem, BookmarkArticleItem } from "./ArticleItem";
import theme from "@constants/theme";

const ArticlesList = ({ articles, variant = "default" }) => {
  const renderers = {
    bookmark: ({ item }) => <BookmarkArticleItem article={item} />,
    default: ({ item, index }) => (
      <AnimatedArticleItem article={item} index={index} />
    ),
  };

  const renderItem = renderers[variant] ?? renderers.default;

  return (
    <FlatList
      data={articles}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      ItemSeparatorComponent={
        <View
          style={{
            borderBottomColor: theme.colors.textSecondary + "30",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      }
    />
  );
};

export default ArticlesList;
