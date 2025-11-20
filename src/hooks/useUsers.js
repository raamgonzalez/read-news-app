import { useCallback, useEffect, useState } from "react";
import { fetchUsers } from "@services/usersApi";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const loadUsers = useCallback(async ({ silent } = {}) => {
    if (!silent) setLoading(true);
    try {
      setError(null);
      const response = await fetchUsers();
      setUsers(response);
    } catch (err) {
      setError(err);
      if (!silent) setUsers([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  const refresh = useCallback(() => {
    setRefreshing(true);
    loadUsers({ silent: true });
  }, [loadUsers]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return {
    users,
    loading,
    error,
    refreshing,
    refresh,
    reload: loadUsers,
  };
};

export default useUsers;
