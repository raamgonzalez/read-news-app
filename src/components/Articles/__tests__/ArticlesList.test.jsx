import React from "react";
import { render } from "@testing-library/react-native";
import ArticlesList from "../ArticlesList";

jest.mock("../ArticleItem");

describe("ArticlesList", () => {
  const articles = [
    { id: "1", title: "Primera nota" },
    { id: "2", title: "Segunda nota" },
  ];

  it("usa AnimatedArticleItem por defecto", () => {
    const { getByText, getByTestId } = render(
      <ArticlesList articles={articles} />
    );

    getByText("Animado: Primera nota");
    getByText("Animado: Segunda nota");
    getByTestId("animated-1");
    getByTestId("animated-2");
  });

  it("usa BookmarkArticleItem cuando variant es bookmark", () => {
    const { getByText, getByTestId } = render(
      <ArticlesList articles={articles} variant="bookmark" />
    );

    getByText("Favorito: Primera nota");
    getByText("Favorito: Segunda nota");
    getByTestId("bookmark-1");
    getByTestId("bookmark-2");
  });
});
