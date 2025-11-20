import AnimatedIconButton from "./AnimatedIconButton";

const AnimatedTabButton = ({ variant = "shrink", style, ...rest }) => {
  return (
    <AnimatedIconButton
      variant={variant}
      style={({ pressed }) => [
        {
          flex: 1,
          paddingVertical: 6,
          alignItems: "center",
          justifyContent: "center",
        },
        pressed && { opacity: 0.9 },
        typeof style === "function" ? style({ pressed }) : style,
      ]}
      {...rest}
    />
  );
};

export default AnimatedTabButton;
