import { fireEvent, render, waitFor } from "@testing-library/react-native";
import LoginScreen from "../login";
import useAuthStore from "@store/useAuthStore";
import { useRouter } from "expo-router";

jest.mock("@store/useAuthStore");
jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

describe("LoginScreen", () => {
  const mockSetSession = jest.fn();
  const mockReplace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useAuthStore.mockReturnValue({ setSession: mockSetSession });
    useRouter.mockReturnValue({ replace: mockReplace });
  });

  test("Muestra errores cuando la validación falla", async () => {
    const { getByText, getByTestId } = render(<LoginScreen />);

    fireEvent.changeText(getByTestId("login-email"), "bad");
    fireEvent.changeText(getByTestId("login-password"), "123");
    fireEvent.press(getByText("Ingresar"));

    await waitFor(() => {
      getByText("Ingresa un email válido");
      getByText("La contraseña debe tener al menos 6 caracteres");
    });
  });

  test("Inicia sesión con credenciales válidas", async () => {
    const { getByText, getByTestId } = render(<LoginScreen />);

    fireEvent.changeText(getByTestId("login-email"), "demo@example.com");
    fireEvent.changeText(getByTestId("login-password"), "123456");
    fireEvent.press(getByText("Ingresar"));

    await waitFor(() => {
      expect(mockSetSession).toHaveBeenCalledWith(
        expect.objectContaining({
          user: expect.objectContaining({
            email: "demo@example.com",
          }),
          token: expect.any(String),
        })
      );
      expect(mockReplace).toHaveBeenCalledWith("/user");
    });
  });
});
