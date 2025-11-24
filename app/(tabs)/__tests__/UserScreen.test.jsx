import { fireEvent, render } from "@testing-library/react-native";
import UserScreen from "../user";
import useAuthStore from "@store/useAuthStore";
import { useRouter } from "expo-router";

jest.mock("@store/useAuthStore");
jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

describe("UserScreen", () => {
  const mockClearSession = jest.fn();
  const mockReplace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useRouter.mockReturnValue({ replace: mockReplace });
  });

  test("Renderiza los datos del usuario", () => {
    useAuthStore.mockReturnValue({
      user: {
        name: "Jane Doe",
        email: "jane@example.com",
        avatar: "https://i.pravatar.cc/120?img=42",
      },
      clearSession: mockClearSession,
    });

    const { getByText } = render(<UserScreen />);

    getByText("Jane Doe");
    getByText("jane@example.com");
    getByText("Sesión activa");
  });

  test("Limpia la sesión al presionar cerrar sesión", () => {
    useAuthStore.mockReturnValue({
      user: { name: "John", email: "john@example.com" },
      clearSession: mockClearSession,
    });

    const { getByText } = render(<UserScreen />);

    fireEvent.press(getByText("Cerrar sesión"));

    expect(mockClearSession).toHaveBeenCalled();
    expect(mockReplace).toHaveBeenCalledWith("/");
  });
});
