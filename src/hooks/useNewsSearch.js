import { useEffect, useState } from "react";

import { fetchEverything } from "../services/guardianApi";

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
        const articlesResponse = await fetchEverything({
          query,
          sortBy,
          page,
          pageSize,
        });

        setArticles(articlesResponse ?? []);
        setError(null);
      } catch (err) {
        setError(err?.message ?? "Error al consultar la API de The Guardian.");
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, [query, sortBy, page, pageSize]);

  return { articles, loading, error };
};

export default useNewsSearch;
