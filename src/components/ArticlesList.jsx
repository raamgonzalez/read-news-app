import { FlatList, StyleSheet, View } from "react-native";
import ArticleItem from "./ArticleItem";
import theme from "../theme";

const ArticlesList = ({ articles }) => (
  <FlatList
    data={articles}
    keyExtractor={(item, index) => `${item.title}-${index}`}
    renderItem={ArticleItem}
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
