import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import theme from "../theme";
import TextStyle from "../ui/TextStyle";

const InputSearch = ({
  value,
  onChangeText,
  placeholder = "Buscar noticias",
  error,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasError = Boolean(error);
  console.log(error);

  return (
    <>
      <TextInput
        style={[
          styles.input,
          hasError && styles.inputError,
          isFocused && styles.inputFocused,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textSecondary}
        keyboardType="default"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
      {hasError ? (
        <TextStyle style={styles.errorMessage} color="warning">
          {error}
        </TextStyle>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    marginTop: 8,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.textSecondary,
    borderRadius: 8,
    borderWidth: 1,
    color: theme.colors.textPrimary,
    elevation: 2,
    fontFamily: theme.fonts.main,
    height: 48,
    paddingHorizontal: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  inputError: {
    borderColor: theme.colors.warning,
  },
  inputFocused: {
    borderColor: theme.colors.accent,
    shadowOpacity: 0.15,
  },
});

export default InputSearch;
