import { View } from "react-native";
import Screen from "@ui/Screen";
import TextStyle from "@ui/TextStyle";
import ArticlesList from "@components/Articles/ArticlesList";
import ArticleSkeleton from "@components/Articles/ArticleSkeleton";
import useFavoritesNewsStore from "@store/useFavoritesNewsStore";
import theme from "@constants/theme";

const BookmarksScreen = () => {
  const { favorites } = useFavoritesNewsStore();
  const hydrated = useFavoritesNewsStore.persist?.hasHydrated?.() ?? true;

  const hasFavorites = favorites && favorites.length > 0;
  const isLoading = !hydrated;

  return (
    <Screen>
      {isLoading ? (
        <ArticleSkeleton variant="bookmark" />
      ) : hasFavorites ? (
        <ArticlesList articles={favorites} variant="bookmark" />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TextStyle color={theme.colors.textSecondary} align="center">
            Aun no has guardado articulos.
          </TextStyle>
        </View>
      )}
    </Screen>
  );
};

export default BookmarksScreen;
