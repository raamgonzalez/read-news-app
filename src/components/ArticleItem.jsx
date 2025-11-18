import { Image, StyleSheet, Text, View } from "react-native";

const ArticleItem = ({ item = {} }) => (
  <View style={styles.articleCard}>
    <View style={styles.contentCard}>
      {item.source?.name ? (
        <Text style={styles.articleSource}>{item.source.name}</Text>
      ) : null}
      <Text style={styles.articleTitle}>{item.title}</Text>
    </View>
    <Image style={styles.articleImage} source={{ uri: item.urlToImage }} />
  </View>
);

const styles = StyleSheet.create({
  articleCard: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
    paddingVertical: 12,
  },
  articleImage: { height: 64, width: 64 },
  articleSource: {
    color: "#666",
    fontSize: 12,
    fontStyle: "italic",
    marginBottom: 6,
  },
  articleTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  contentCard: { flex: 1, gap: 2, justifyContent: "center" },
});

export default ArticleItem;
