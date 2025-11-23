import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Screen from "@ui/Screen";
import TextStyle from "@ui/TextStyle";
import theme from "@constants/theme";
import useAuthStore from "../../src/store/useAuthStore";
import AnimatedIconButton from "../../src/ui/AnimatedIconButton";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setSession } = useAuthStore();

  const handleSubmit = () => {
    // TODO: integrar con flujo real de autenticacion
    const mockUser = { email };
    const mockToken = "demo-token";
    setSession({ user: mockUser, token: mockToken });
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
              onChangeText={setEmail}
              placeholder="tuemail@ejemplo.com"
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>
          <View style={{ gap: 4 }}>
            <TextStyle fontWeight={theme.fontWeights.semiBold}>
              Contrasena
            </TextStyle>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="********"
              secureTextEntry
              style={styles.input}
            />
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
});

export default LoginScreen;
