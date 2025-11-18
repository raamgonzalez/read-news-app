import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";

import ArticlesList from "../components/ArticlesList";
import useNewsSearch from "../hooks/useNewsSearch";

const Main = () => {
  const { articles, loading, error } = useNewsSearch({ query: "argentina" });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Read Newspaper</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <ArticlesList articles={articles} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  errorText: {
    color: "red",
    fontSize: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
});

export default Main;
