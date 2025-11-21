import { useQuery } from "@tanstack/react-query";
import { fetchArticleById } from "@services/guardianApi";

const useArticle = (id) => {
  const queryResult = useQuery({
    queryKey: ["article", id],
    queryFn: () => fetchArticleById(id),
    enabled: Boolean(id),
    staleTime: 5 * 60 * 1000,
  });

  if (!id) {
    return {
      article: null,
      loading: false,
      error: "Es necesario indicar el id del artículo.",
    };
  }

  return {
    article: queryResult.data ?? null,
    loading: queryResult.isLoading,
    error:
      queryResult.error?.message ??
      (queryResult.error ? "Error al consultar el artículo." : null),
  };
};

export default useArticle;
