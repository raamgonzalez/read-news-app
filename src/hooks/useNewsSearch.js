import { useEffect, useState } from "react";

import { fetchEverything } from "../services/newsApi";

const useNewsSearch = ({
  query,
  sortBy = "publishedAt",
  page = 1,
  pageSize = 20,
} = {}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(Boolean(query));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setArticles([]);
      setLoading(false);
      setError("Es necesario ingresar una busqueda.");
      return;
    }

    const loadArticles = async () => {
      try {
        setLoading(true);
        const response = await fetchEverything({
          query,
          sortBy,
          page,
          pageSize,
        });

        setArticles(response.articles ?? []);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [query, sortBy, page, pageSize]);

  return { articles, loading, error };
};

export default useNewsSearch;
