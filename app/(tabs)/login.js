import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Screen from "@ui/Screen";
import TextStyle from "@ui/TextStyle";
import theme from "@constants/theme";
import * as yup from "yup";
import useAuthStore from "../../src/store/useAuthStore";
import AnimatedIconButton from "../../src/ui/AnimatedIconButton";

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Ingresa un email válido")
    .required("El email es obligatorio"),
  password: yup
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .required("La contraseña es obligatoria"),
});

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const { setSession } = useAuthStore();

  const clearError = (field) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async () => {
    // TODO: integrar con flujo real de autenticacion
    try {
      await loginSchema.validate({ email, password }, { abortEarly: false });
      setErrors({});
      const mockUser = { email };
      const mockToken = "demo-token";
      setSession({ user: mockUser, token: mockToken });
    } catch (validationError) {
      const formattedErrors = validationError.inner.reduce((acc, err) => {
        if (err.path && !acc[err.path]) {
          acc[err.path] = err.message;
        }
        return acc;
      }, {});
      setErrors(formattedErrors);
    }
  };

  return (
    <Screen>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <View style={styles.header}>
          <TextStyle fontSize={26} fontWeight={theme.fontWeights.bold}>
            Bienvenido
          </TextStyle>
          <TextStyle color={theme.colors.textSecondary}>
            Ingresa para continuar leyendo
          </TextStyle>
        </View>

        <View style={styles.form}>
          <View style={{ gap: 4 }}>
            <TextStyle fontWeight={theme.fontWeights.semiBold}>Email</TextStyle>
            <TextInput
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                clearError("email");
              }}
              placeholder="tuemail@ejemplo.com"
              autoCapitalize="none"
              keyboardType="email-address"
              style={[styles.input, errors.email && styles.inputError]}
            />
            {errors.email ? (
              <TextStyle color={theme.colors.warning} style={styles.errorText}>
                {errors.email}
              </TextStyle>
            ) : null}
          </View>
          <View style={{ gap: 4 }}>
            <TextStyle fontWeight={theme.fontWeights.semiBold}>
              Contrasena
            </TextStyle>
            <TextInput
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                clearError("password");
              }}
              placeholder="********"
              secureTextEntry
              style={[styles.input, errors.password && styles.inputError]}
            />
            {errors.password ? (
              <TextStyle color={theme.colors.warning} style={styles.errorText}>
                {errors.password}
              </TextStyle>
            ) : null}
          </View>

          <AnimatedIconButton
            variant="shrink"
            onPress={handleSubmit}
            style={{
              backgroundColor: theme.colors.accent,
              borderRadius: 12,
              alignItems: "center",
              paddingVertical: 8,
              marginTop: 8,
            }}
          >
            <TextStyle
              fontWeight={theme.fontWeights.bold}
              color={theme.colors.background}
            >
              Ingresar
            </TextStyle>
          </AnimatedIconButton>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 4,
  },
  form: {
    gap: 8,
    marginTop: 24,
  },
  header: {
    marginTop: 8,
  },
  input: {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.textSecondary + "50",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  inputError: {
    borderColor: theme.colors.warning,
  },
});

export default LoginScreen;
