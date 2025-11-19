const BASE_URL = "https://content.guardianapis.com";
const API_KEY = "c5aeb9a7-a7a8-495a-b9a9-09b0d582beaf";

const ORDER_MAP = {
  publishedAt: "newest",
  newest: "newest",
  oldest: "oldest",
  relevance: "relevance",
};

const buildUrl = (endpoint, params = {}) => {
  const searchParams = new URLSearchParams({
    "api-key": API_KEY,
    "show-fields": "thumbnail,trailText,byline",
    ...params,
  });

  return `${BASE_URL}/${endpoint}?${searchParams.toString()}`;
};

const normalizeArticle = (article) => ({
  id: article?.id,
  title: article?.webTitle,
  url: article?.webUrl,
  urlToImage: article?.fields?.thumbnail,
  source: {
    name: article?.sectionName || article?.pillarName || "The Guardian",
  },
  publishedAt: article?.webPublicationDate,
  description: article?.fields?.trailText,
  author: article?.fields?.byline,
});

export const fetchEverything = async ({
  query,
  sortBy = "publishedAt",
  page = 1,
  pageSize = 20,
}) => {
  const orderBy = ORDER_MAP[sortBy] ?? ORDER_MAP.publishedAt;
  const url = buildUrl("search", {
    q: query,
    "order-by": orderBy,
    page,
    "page-size": pageSize,
  });

  const response = await fetch(url);
  const payload = await response.json();

  if (!response.ok || payload?.response?.status === "error") {
    const message =
      payload?.message ||
      payload?.response?.message ||
      payload?.response?.status ||
      "Unknown Guardian API error";
    throw new Error(`Guardian API error (${response.status}): ${message}`);
  }

  const articles = payload?.response?.results ?? [];
  return articles.map(normalizeArticle);
};
