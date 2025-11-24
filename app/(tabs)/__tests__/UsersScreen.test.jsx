import React from "react";
import { render } from "@testing-library/react-native";
import UsersScreen from "../users";
import useUsers from "@hooks/useUsers";

jest.mock("@hooks/useUsers");

const buildState = (overrides = {}) => ({
  users: [],
  loading: false,
  error: null,
  refreshing: false,
  refresh: jest.fn(),
  reload: jest.fn(),
  ...overrides,
});

describe("UsersScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Muestra el indicador de carga", () => {
    useUsers.mockReturnValue(buildState({ loading: true }));

    const { getByTestId } = render(<UsersScreen />);

    getByTestId("users-loading");
  });

  test("Renderiza la lista cuando hay datos", () => {
    const users = [
      {
        id: 1,
        firstname: "Jane",
        lastname: "Doe",
        email: "jane@example.com",
        address: { city: "Madrid" },
        company: { name: "Acme" },
      },
      {
        id: 2,
        firstname: "John",
        lastname: "Smith",
        email: "john@example.com",
        address: { city: "Lima" },
        company: { name: "Beta" },
      },
    ];

    useUsers.mockReturnValue(buildState({ users }));

    const { getByText } = render(<UsersScreen />);

    getByText("Jane Doe");
    getByText("John Smith");
  });

  test("Muestra el estado vacío con error", () => {
    useUsers.mockReturnValue(buildState({ error: "Network error", users: [] }));

    const { getByText } = render(<UsersScreen />);

    getByText("No pudimos cargar los usuarios");
  });
});
