import { useState } from "react";
import { StyleSheet, View } from "react-native";

import ArticlesList from "../components/ArticlesList";
import ArticleSkeleton from "../components/ArticleSkeleton";
import InputSearch from "../components/InputSearch";
import AppBar from "../components/AppBar";
import theme from "../theme";
import useNewsSearch from "../hooks/useNewsSearch";

const Main = () => {
  const [query, setQuery] = useState("");
  const { articles, loading, error } = useNewsSearch({ query });

  const handleSearch = (q) => {
    setQuery(q);
  };

  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <View style={styles.container} className="bg-orange-900">
        <InputSearch error={error} onChangeText={handleSearch} value={query} />
        {loading ? <ArticleSkeleton /> : <ArticlesList articles={articles} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default Main;
