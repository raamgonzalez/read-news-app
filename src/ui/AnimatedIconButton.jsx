import { forwardRef, useRef } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";

const VARIANTS = {
  shrink: {
    pressIn: 0.9,
    viewStyle: (value) => ({ transform: [{ scale: value }] }),
    spring: { stiffness: 230, damping: 18, mass: 0.6 },
  },
  pop: {
    pressIn: 1.08,
    viewStyle: (value) => ({ transform: [{ scale: value }] }),
    spring: { stiffness: 180, damping: 12, mass: 0.7 },
  },
};

const AnimatedIconButton = forwardRef(
  ({ children, style, variant = "shrink", ...rest }, ref) => {
    const animValue = useRef(new Animated.Value(1)).current;
    const config = VARIANTS[variant] || VARIANTS.shrink;

    const animateTo = (value) => {
      Animated.spring(animValue, {
        toValue: value,
        useNativeDriver: true,
        ...config.spring,
      }).start();
    };

    const handlePressIn = () => animateTo(config.pressIn);
    const handlePressOut = () => animateTo(1);

    const resolveStyle = (pressed) => {
      const extra =
        typeof style === "function" ? style({ pressed }) : style || {};
      return [styles.button, pressed && styles.pressed, extra];
    };

    return (
      <Pressable
        ref={ref}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={({ pressed }) => resolveStyle(pressed)}
        {...rest}
      >
        <Animated.View style={config.viewStyle(animValue)}>
          {children}
        </Animated.View>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 100,
    justifyContent: "center",
    padding: 8,
  },
  pressed: {
    opacity: 0.9,
  },
});

AnimatedIconButton.displayName = "AnimatedIconButton";

export default AnimatedIconButton;
