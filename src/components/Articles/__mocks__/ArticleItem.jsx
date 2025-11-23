import React from "react";
import { Text } from "react-native";

export const ArticleItem = ({ article }) => (
  <Text testID={`article-${article.id}`}>{article.title}</Text>
);

export const AnimatedArticleItem = ({ article }) => (
  <Text testID={`animated-${article.id}`}>Animado: {article.title}</Text>
);

export const BookmarkArticleItem = ({ article }) => (
  <Text testID={`bookmark-${article.id}`}>Favorito: {article.title}</Text>
);
