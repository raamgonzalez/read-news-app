import { View } from "react-native";
import Screen from "@ui/Screen";
import InputSearch from "@components/InputSearch";
import ArticleSkeleton from "@components/Articles/ArticleSkeleton";
import ArticlesList from "@components/Articles/ArticlesList";
import { useState } from "react";
import useNewsSearch from "@hooks/useNewsSearch";

const HomeScreen = () => {
  const [query, setQuery] = useState("");
  const { articles, loading, error } = useNewsSearch({
    query: query || "argentina",
  });

  const handleSearch = (q) => {
    setQuery(q);
  };

  return (
    <Screen>
      <View style={{ marginVertical: 8 }}>
        <InputSearch error={error} onChangeText={handleSearch} value={query} />
      </View>
      {loading ? <ArticleSkeleton /> : <ArticlesList articles={articles} />}
    </Screen>
  );
};

export default HomeScreen;
