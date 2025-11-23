import React from "react";
import { render } from "@testing-library/react-native";
import TextStyle from "../TextStyle";
import theme from "@constants/theme";

describe("TextStyle", () => {
  test("Renderiza los children con estilos predeterminados del tema", () => {
    const text = "Breaking News";

    const { getByText } = render(<TextStyle>{text}</TextStyle>);

    expect(getByText(text)).toHaveStyle({
      color: theme.colors.textPrimary,
      fontFamily: theme.fonts.main,
      fontSize: theme.fontSizes.body,
      fontWeight: theme.fontWeights.normal,
    });
  });

  test("Al aplicar style props y custom styles renderiza correctamente", () => {
    const { getByText } = render(
      <TextStyle
        align="center"
        color="#123456"
        fontSize={20}
        fontWeight="700"
        style={{ letterSpacing: 2 }}
      >
        Text customizado
      </TextStyle>
    );

    expect(getByText("Text customizado")).toHaveStyle({
      textAlign: "center",
      color: "#123456",
      fontSize: 20,
      fontWeight: "700",
      letterSpacing: 2,
    });
  });
});
