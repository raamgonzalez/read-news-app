import { StyleSheet, View } from "react-native";
import theme from "../src/constants/theme";
import Screen from "../src/ui/Screen";
import { Link } from "expo-router";
import AnimatedIconButton from "../src/ui/AnimatedIconButton";
import { CircleInfoIcon } from "../src/ui/icons";
import InputSearch from "../src/components/InputSearch";
import ArticleSkeleton from "../src/components/ArticleSkeleton";
import ArticlesList from "../src/components/ArticlesList";
import { useState } from "react";
import useNewsSearch from "../src/hooks/useNewsSearch";

const Index = () => {
  const [query, setQuery] = useState("");
  const { articles, loading, error } = useNewsSearch({
    query: query || "argentina",
  });

  const handleSearch = (q) => {
    setQuery(q);
  };

  return (
    <Screen>
      <View style={styles.container}>
        {/* <Link asChild href="/about">
          <AnimatedIconButton>
            <CircleInfoIcon />
          </AnimatedIconButton>
        </Link> */}
        <View style={{ marginBottom: 16 }}>
          <InputSearch
            error={error}
            onChangeText={handleSearch}
            value={query}
          />
        </View>
        {loading ? <ArticleSkeleton /> : <ArticlesList articles={articles} />}
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
});

export default Index;
