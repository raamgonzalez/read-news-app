import { Text, StyleSheet } from "react-native";
import theme from "../constants/theme.js";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
  },
});

const TextStyle = ({
  align,
  children,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  style,
  ...restOfProps
}) => {
  const textStyles = [
    styles.text,
    color && { color },
    align && { textAlign: align },
    fontSize && { fontSize },
    fontWeight && { fontWeight },
    fontFamily && { fontFamily },
    style,
  ];

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
};

export default TextStyle;
