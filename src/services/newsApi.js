const BASE_URL = "https://newsapi.org/v2";
const API_KEY = "10c03fbba5bb42138de139a1339df5d5";

const buildUrl = (endpoint, params = {}) => {
  const searchParams = new URLSearchParams({
    apiKey: API_KEY,
    ...params,
  });

  return `${BASE_URL}/${endpoint}?${searchParams.toString()}`;
};

export const fetchEverything = async ({
  query,
  sortBy = "publishedAt",
  page = 1,
  pageSize = 20,
  language = "es",
}) => {
  const url = buildUrl("everything", {
    q: query,
    sortBy,
    page,
    pageSize,
    language,
  });

  const response = await fetch(url);

  if (!response.ok) {
    const errorPayload = await response.text();
    throw new Error(`NewsAPI error (${response.status}): ${errorPayload}`);
  }

  return response.json();
};
