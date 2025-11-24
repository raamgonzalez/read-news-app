import React from "react";
import { Animated, Text } from "react-native";
import { render, fireEvent } from "@testing-library/react-native";
import AnimatedIconButton from "../AnimatedIconButton";

describe("AnimatedIconButton", () => {
  let springSpy;

  beforeEach(() => {
    springSpy = jest.spyOn(Animated, "spring").mockImplementation(() => ({
      start: jest.fn(),
    }));
  });

  afterEach(() => {
    springSpy.mockRestore();
  });

  test("El componente ejecuta la animación shrink al presionar y soltar", () => {
    const { getByText } = render(
      <AnimatedIconButton testID="icon-button">
        <Text>Icono</Text>
      </AnimatedIconButton>
    );

    const Icon = getByText("Icono");

    fireEvent(Icon, "pressIn");
    expect(springSpy).toHaveBeenCalledTimes(1);
    const [, pressInConfig] = springSpy.mock.calls[0];
    expect(pressInConfig).toEqual(
      expect.objectContaining({
        toValue: 0.9,
        useNativeDriver: true,
        stiffness: 230,
        damping: 18,
        mass: 0.6,
      })
    );

    fireEvent(Icon, "pressOut");
    expect(springSpy).toHaveBeenCalledTimes(2);
    const [, pressOutConfig] = springSpy.mock.calls[1];
    expect(pressOutConfig).toEqual(
      expect.objectContaining({
        toValue: 1,
        useNativeDriver: true,
        stiffness: 230,
        damping: 18,
        mass: 0.6,
      })
    );
  });

  test("El componente usa la configuración pop cuando se indica el variant", () => {
    const { getByText } = render(
      <AnimatedIconButton variant="pop">
        <Text>Icono</Text>
      </AnimatedIconButton>
    );

    fireEvent(getByText("Icono"), "pressIn");

    const [, config] = springSpy.mock.calls[0];
    expect(config).toEqual(
      expect.objectContaining({
        toValue: 1.08,
        stiffness: 180,
        damping: 12,
        mass: 0.7,
      })
    );
  });
});
