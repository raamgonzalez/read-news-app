import { Image, StyleSheet, View } from "react-native";
import TextStyle from "../ui/TextStyle";
import theme from "../theme";

const ArticleItem = ({ item = {} }) => (
  <View style={styles.articleCard}>
    <View style={styles.contentCard}>
      {item.source?.name ? (
        <TextStyle fontSize={theme.fontSizes.author}>
          {item.source.name}
        </TextStyle>
      ) : null}
      <TextStyle fontSize={theme.fontSizes.subheading} fontWeight="bold">
        {item.title}
      </TextStyle>
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
  articleImage: { borderRadius: 4, height: 64, overflow: "hidden", width: 64 },
  contentCard: { flex: 1, gap: 4, justifyContent: "center" },
});

export default ArticleItem;
