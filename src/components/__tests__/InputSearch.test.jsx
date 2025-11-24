import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import InputSearch from "../InputSearch";
import theme from "@constants/theme";

describe("InputSearch", () => {
  test("renderiza el input con placeholder y propaga los cambios", () => {
    const handleChange = jest.fn();

    const { getByPlaceholderText } = render(
      <InputSearch value="Argentina" onChangeText={handleChange} />
    );

    const input = getByPlaceholderText("Buscar noticias");
    expect(input).toHaveProp("value", "Argentina");

    fireEvent.changeText(input, "Conexa");
    expect(handleChange).toHaveBeenCalledWith("Conexa");
  });

  test("muestra el mensaje de error y aplica el estilo correspondiente", () => {
    const { getByPlaceholderText, getByText } = render(
      <InputSearch value="" onChangeText={jest.fn()} error="Campo requerido" />
    );

    const input = getByPlaceholderText("Buscar noticias");

    expect(input).toHaveStyle({
      borderColor: theme.colors.warning,
    });
    expect(getByText("Campo requerido")).toBeTruthy();
  });

  test("aplica estilo de foco cuando gana y pierde el foco", () => {
    const { getByPlaceholderText } = render(
      <InputSearch value="" onChangeText={jest.fn()} />
    );

    const input = getByPlaceholderText("Buscar noticias");

    expect(input).toHaveStyle({
      borderColor: theme.colors.textSecondary,
    });

    fireEvent(input, "focus");
    expect(input).toHaveStyle({
      borderColor: theme.colors.background,
      shadowOpacity: 0.15,
    });

    fireEvent(input, "blur");
    expect(input).toHaveStyle({
      borderColor: theme.colors.textSecondary,
    });
  });
});
