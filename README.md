# Read News App

Aplicación móvil construida con **Expo Router** y **React Native** que permite buscar noticias, explorar usuarios y gestionar una sesión básica para habilitar secciones protegidas como Favoritos y Perfil.

## Stack principal

- **Expo Router + React Native 0.81** – Navegación con estructura de tabs (app/(tabs)) y stacks.
- **React Query** – Cacheo y fetching de noticias/usuarios (hooks `useNewsSearch`, `useUsers`).
- **Zustand + AsyncStorage** – Manejo de sesión mock (login/profile) y favoritos.
- **Yup** – Validación del formulario de login.
- **Testing Library + Jest** – Pruebas de la pantalla Home con mocks de hooks/componentes.
- **React Native Animated** – Animaciones de botones (`AnimatedIconButton`) y skeletons.
- **Module alias (babel/js.config)** – Imports relativos (`@components`, `@ui`, etc.).

## Decisiones de diseño

1. **Tabs protegidas**: Home/About son públicas; Bookmarks/Users/Profile requieren token. Login aparece solo cuando no hay sesión.
2. **Perfil simplificado**: tras el login se genera un usuario mock con avatar `pravatar` para mostrar más contexto y permitir cerrar sesión (redirige a Home).
3. **Inputs realistas**: el campo de búsqueda en Home se testea sin mockear, validando `TextInput` real con `testID`/`name`.
4. **UI reutilizable**: `Screen`, `TextStyle`, `AnimatedIconButton`, `InputSearch`, `ArticlesList`/`Skeleton` centralizan estilos y comportamientos.
5. **Internacionalización**: textos definidos en `src/i18n` (EN/ES) y cargados desde `about.js`.
6. **Floating Tab Bar**: la barra inferior tiene estilo de “pill” flotante, con avatar en la pestaña de perfil.

## Estructura relevante

```
app/
  _layout.js           # Stack raíz con header e i18n
  (tabs)/              # Rutas de tabs (home, about, login, bookmars, users, user)
src/
  components/          # UI y artículos
  hooks/               # Hooks de datos (React Query)
  store/               # Zustand (auth + favoritos)
  ui/                  # Componentes de estilo/animaciones
  i18n/                # Configuración de traducciones
```

## Requisitos

- Node.js 18+
- npm 9+ (o pnpm/yarn adaptando comandos)
- Expo CLI (`npx expo`)

## Instalación y ejecución

```bash
npm install
# Inicia el bundle Metro + Expo
npm start

# Shortcuts desde Expo:
# presiona "a" para Android, "i" para iOS, "w" para web.
```

Variables extra no son necesarias; las APIs públicas (Guardian/JSONPlaceholder) funcionan sin claves.

## Pruebas

```bash
npm test -- HomeScreen   # ejecuta las pruebas de la pantalla principal
# o simplemente
npm test
```

Las pruebas usan `jest-expo` y `@testing-library/react-native` con mocks de hooks/componentes para aislar la lógica.

## Linting / formato

El proyecto incluye configuración de ESLint/Prettier (ver `eslint.config.mjs`). Para ejecutar:

```bash
npm run lint   # (agregar script si se desea)
```
