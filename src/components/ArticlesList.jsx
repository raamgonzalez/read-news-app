import { FlatList, StyleSheet, View } from "react-native";
import ArticleItem from "./ArticleItem";

const ArticlesList = ({ articles }) => (
  <FlatList
    data={articles}
    keyExtractor={(item, index) => `${item.title}-${index}`}
    renderItem={ArticleItem}
    contentContainerStyle={styles.listContent}
    ItemSeparatorComponent={
      <View
        style={{
          borderBottomColor: "#ddd",
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
    }
  />
);

const styles = StyleSheet.create({
  listContent: {
    paddingVertical: 24,
  },
});

export default ArticlesList;
