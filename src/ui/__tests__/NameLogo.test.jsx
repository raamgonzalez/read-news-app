import React from "react";
import { render } from "@testing-library/react-native";
import NameLogo from "../NameLogo";
import theme from "@constants/theme";

const mockLink = jest.fn().mockImplementation(({ children }) => children);

jest.mock("expo-router", () => ({
  Link: (props) => mockLink(props),
}));

describe("NameLogo", () => {
  beforeEach(() => {
    mockLink.mockClear();
  });

  test("Renderiza el texto Prisma News con los estilos por defecto", () => {
    const { getByText } = render(<NameLogo />);
    const texto = getByText("Prisma News");

    expect(texto).toHaveStyle({
      color: theme.colors.textTitle,
      fontWeight: theme.fontWeights.bold,
      fontStyle: "italic",
      fontSize: 25,
    });
    expect(mockLink).toHaveBeenCalledWith(
      expect.objectContaining({ href: "/", asChild: true })
    );
  });

  test("Al aplicar color modifica el color del logo", () => {
    const { getByText } = render(<NameLogo color="#aa00ff" />);

    expect(getByText("Prisma News")).toHaveStyle({
      color: "#aa00ff",
    });
  });
});
