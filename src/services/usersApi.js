const USERS_ENDPOINT = "https://jsonplaceholder.org/users";

const mapUser = (user) => ({
  id: user?.id,
  firstname: user?.firstname,
  lastname: user?.lastname,
  email: user?.email,
  address: user?.address,
  company: user?.company,
  login: user?.login,
});

export const fetchUsers = async () => {
  const response = await fetch(USERS_ENDPOINT);

  if (!response.ok) {
    throw new Error(`Error de red (${response.status}) al cargar usuarios`);
  }

  const payload = await response.json();
  const normalizedUsers = Array.isArray(payload) ? payload.map(mapUser) : [];

  return normalizedUsers;
};
