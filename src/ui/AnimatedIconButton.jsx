import { forwardRef, useRef } from "react";
import { Animated, Pressable, StyleSheet } from "react-native";

const AnimatedIconButton = forwardRef(
  ({ children, style, scaleTo = 0.9, ...rest }, ref) => {
    const scale = useRef(new Animated.Value(1)).current;

    const animateTo = (value) => {
      Animated.spring(scale, {
        toValue: value,
        stiffness: 200,
        damping: 15,
        mass: 0.5,
        useNativeDriver: true,
      }).start();
    };

    const handlePressIn = () => animateTo(scaleTo);
    const handlePressOut = () => animateTo(1);

    return (
      <Pressable
        ref={ref}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressed,
          style,
        ]}
        {...rest}
      >
        <Animated.View style={{ transform: [{ scale }] }}>
          {children}
        </Animated.View>
      </Pressable>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 999,
    justifyContent: "center",
    padding: 8,
  },
  pressed: {
    opacity: 0.9,
  },
});

AnimatedIconButton.displayName = "AnimatedIconButton";

export default AnimatedIconButton;
