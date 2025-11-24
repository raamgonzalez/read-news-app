import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useFavoritesNewsStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (article) =>
        set((state) => {
          if (!article?.id) return state;
          const exists = state.favorites.some((item) => item.id === article.id);
          return exists ? state : { favorites: [...state.favorites, article] };
        }),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((item) => item.id !== id),
        })),

      toggleFavorite: (article) => {
        if (!article?.id) return;
        const exists = get().favorites.some((item) => item.id === article.id);
        return exists
          ? get().removeFavorite(article.id)
          : get().addFavorite(article);
      },

      isFavorite: (id) => get().favorites.some((item) => item.id === id),
    }),
    {
      name: "favorites-store",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);

export default useFavoritesNewsStore;
