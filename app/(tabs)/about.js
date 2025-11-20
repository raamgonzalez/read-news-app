import { ScrollView, StyleSheet, View } from "react-native";

import Screen from "@ui/Screen";
import TextStyle from "@ui/TextStyle";
import theme from "@constants/theme";

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
            Aplicacion movil para explorar titulares recientes, seguir articulos
            y leerlos con una interfaz limpia, rapida y sin distracciones.
          </TextStyle>
          <TextStyle style={styles.body}>
            Usa la API publica de The Guardian para busqueda en tiempo real,
            carga bajo demanda y navegacion con tabs optimizada para iOS y
            Android.
          </TextStyle>
        </View>

        <View style={styles.card}>
          <TextStyle fontWeight={theme.fontWeights.bold}>
            Autor y objetivo
          </TextStyle>
          <TextStyle style={styles.body}>
            Proyecto desarrollado por Ramses Gonzalez para Conexa como muestra
            de arquitectura con React Native y Expo, manejo de estado con hooks
            y patrones reutilizables orientados a productos editoriales.
          </TextStyle>
        </View>

        <View style={styles.card}>
          <TextStyle fontWeight={theme.fontWeights.bold}>
            Herramientas y stack
          </TextStyle>
          <View style={styles.badges}>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                Expo
              </TextStyle>
            </View>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                Expo Router
              </TextStyle>
            </View>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                React Native
              </TextStyle>
            </View>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                Hooks
              </TextStyle>
            </View>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                Guardian API
              </TextStyle>
            </View>
            <View style={styles.badge}>
              <TextStyle
                fontWeight={theme.fontWeights.bold}
                color={theme.colors.background}
              >
                Animations
              </TextStyle>
            </View>
          </View>
          <TextStyle style={styles.body}>
            Se construyo con Expo Router para las rutas de tabs y stacks, hooks
            personalizados para peticiones (noticias y usuarios), componentes de
            UI reutilizables y animaciones en botones para mejorar el feedback
            de interaccion.
          </TextStyle>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: theme.colors.accent,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  badges: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginVertical: 10,
  },
  body: {
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginTop: 4,
  },
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 12,
  },
  container: {
    backgroundColor: theme.colors.surface,
    flexGrow: 1,
    gap: 16,
    paddingBottom: 16,
    paddingTop: 8,
  },
});

export default About;
