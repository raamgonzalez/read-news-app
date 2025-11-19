import { FlatList, StyleSheet, View } from "react-native";
import { AnimatedArticleItem } from "./ArticleItem";
import theme from "../constants/theme";

const ArticlesList = ({ articles }) => (
  <FlatList
    data={articles}
    keyExtractor={(item) => item.id}
    renderItem={({ item, index }) => (
      <AnimatedArticleItem article={item} index={index} />
    )}
    ItemSeparatorComponent={
      <View
        style={{
          borderBottomColor: theme.colors.accent,
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    }
  />
);

export default ArticlesList;
