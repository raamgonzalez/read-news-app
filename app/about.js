import { ScrollView, StyleSheet, View } from "react-native";

import TextStyle from "../src/ui/TextStyle";
import theme from "../src/constants/theme";
import { Link } from "expo-router";

import { HomeIcon } from "../src/ui/icons";
import AnimatedIconButton from "../src/ui/AnimatedIconButton";
import Screen from "../src/ui/Screen";

const About = () => {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.card}>
          <TextStyle
            fontSize={theme.fontSizes.heading}
            fontWeight={theme.fontWeights.bold}
          >
            Read News App
          </TextStyle>
          <TextStyle style={styles.body}>
            Aplicación móvil para explorar titulares recientes, guardar
            favoritos y profundizar en cada nota con una lectura limpia y sin
            distracciones.
          </TextStyle>
          <TextStyle style={styles.body}>
            Consume la API de noticias públicas de NewsAPI y ofrece búsqueda en
            tiempo real, animaciones suaves y componentes accesibles pensados
            para dispositivos iOS y Android.
          </TextStyle>
        </View>

        <View style={styles.card}>
          <TextStyle fontWeight={theme.fontWeights.bold}>
            Autor y objetivo
          </TextStyle>
          <TextStyle style={styles.body}>
            Proyecto desarrollado por Ramsés González para Conexa como muestra
            de arquitectura en React Native, manejo de estado derivado por hooks
            y patrones reutilizables orientados a productos editoriales.
          </TextStyle>
        </View>
        <Link asChild href="/">
          <AnimatedIconButton>
            <HomeIcon />
          </AnimatedIconButton>
        </Link>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  body: {
    color: theme.colors.textSecondary,
    lineHeight: 20,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
    elevation: 2,
    padding: 16,
    rowGap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  container: {
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    padding: 24,
    rowGap: 16,
  },
});

export default About;
