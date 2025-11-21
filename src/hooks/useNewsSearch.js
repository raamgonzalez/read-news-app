import { useQuery } from "@tanstack/react-query";

import { fetchEverything } from "@services/guardianApi";

const useNewsSearch = ({
  query,
  sortBy = "publishedAt",
  page = 1,
  pageSize = 20,
} = {}) => {
  const hasQuery = Boolean(query);

  const queryResult = useQuery({
    queryKey: ["articles", { query, sortBy, page, pageSize }],
    queryFn: () =>
      fetchEverything({
        query,
        sortBy,
        page,
        pageSize,
      }),
    enabled: hasQuery,
    staleTime: 2 * 60 * 1000,
  });

  if (!hasQuery) {
    return {
      articles: [],
      loading: false,
      error: "Es necesario ingresar una busqueda.",
    };
  }

  return {
    articles: queryResult.data ?? [],
    loading: queryResult.isLoading,
    error:
      queryResult.error?.message ??
      (queryResult.error ? "Error al consultar la API de The Guardian." : null),
  };
};

export default useNewsSearch;
