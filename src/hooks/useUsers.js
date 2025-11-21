import { useQuery } from "@tanstack/react-query";

const USERS_ENDPOINT = "https://jsonplaceholder.org/users";

const fetchUsers = async () => {
  const response = await fetch(USERS_ENDPOINT);
  if (!response.ok) throw new Error("No se pudo cargar usuarios");
  return response.json();
};

const useUsers = () => {
  const query = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000,
  });

  return {
    users: query.data ?? [],
    loading: query.isLoading,
    error: query.error,
    refreshing: query.isFetching,
    refresh: query.refetch,
    reload: query.refetch,
  };
};

export default useUsers;
