import { useEffect, useState } from "react";

import { fetchArticleById } from "@services/guardianApi";

const useArticle = (id) => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(Boolean(id));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setArticle(null);
      setError("Es necesario indicar el id del artículo.");
      setLoading(false);
      return;
    }

    const loadArticle = async () => {
      try {
        setLoading(true);
        const articleResponse = await fetchArticleById(id);
        setArticle(articleResponse);
        setError(null);
      } catch (err) {
        setArticle(null);
        setError(err?.message ?? "Error al consultar el artículo.");
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id]);

  return { article, loading, error };
};

export default useArticle;
