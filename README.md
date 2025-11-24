# Read News App

Aplicación móvil construida con **Expo Router** y **React Native** que permite buscar noticias, explorar usuarios y gestionar una sesión mock para habilitar secciones protegidas como Favoritos y Perfil.

## Stack principal

- **Expo Router + React Native 0.81** – Navegación basada en directorios `app/(tabs)` y stacks.
- **React Query** – Fetching/caching de noticias y usuarios (`useNewsSearch`, `useUsers`).
- **Zustand + AsyncStorage** – Persistencia de sesión mock y favoritos.
- **Yup** (centralizado en `src/validation/authSchema.js`) – Validación de formularios.
- **Testing Library + Jest** – Pruebas de HomeScreen, UsersScreen, LoginScreen y UserScreen con hooks/stores mockeados.
- **React Native Animated** – Botones animados y skeletons.
- **Module alias (babel/js.config)** – Imports `@components`, `@ui`, `@validation`, etc.

## Decisiones de diseño

1. **Patrón modular (containers + UI)**: la lógica de datos vive en hooks/servicios (`useNewsSearch`, `useUsers`, Guardian API) y las pantallas consumen componentes presentacionales (`UserCard`, `InputSearch`, `AnimatedIconButton`). Los alias (`@components`, `@hooks`, `@services`, `@validation`, etc.) refuerzan esta separación.
2. **Tabs protegidas**: Home/About siempre visibles; Bookmarks/Users/Profile solo con token; Login únicamente sin sesión.
3. **Perfil enriquecido**: tras el login se crea un usuario mock con avatar `pravatar`, detalles de sesión y botón de logout que vuelve a Home.
4. **Validaciones modulares**: los esquemas (Yup) viven en `src/validation`, lo que facilita reuso en futuras pantallas.
5. **UI reutilizable**: `Screen`, `TextStyle`, `AnimatedIconButton`, `InputSearch`, `UserCard` y skeletons comparten estilos definidos en `theme`.
6. **Internacionalización**: textos en `src/i18n/locales/{es,en}.json`, consumidos principalmente por la pantalla About.
7. **Floating Tab Bar**: barra inferior con estilo “pill” flotante (sombra + `tabBarHideOnKeyboard`) y avatar dinámico en la pestaña de perfil.

## Estructura relevante

```
app/
  _layout.js           # Stack raíz con i18n + QueryProvider
  (tabs)/              # Rutas: home, about, login, bookmarks, users, user
src/
  components/          # UI compartida (incluyendo Users/UserCard)
  hooks/               # Hooks de datos (React Query)
  store/               # Zustand (auth + favoritos)
  providers/           # QueryProvider (React Query)
  services/            # Llamadas HTTP/guards (p.ej. guardian API, users)
  lib/                 # Configuración compartida (queryClient, helpers)
  ui/                  # Componentes de estilo/animaciones
  validation/          # Esquemas Yup (authSchema)
  i18n/                # Configuración de traducciones
```

## Requisitos

- Node.js 18+
- npm 9+ (o pnpm/yarn adaptando comandos)
- Expo CLI (`npx expo`)

## Instalación y ejecución

```bash
npm install
# Inicia Metro + Expo
npm start

# Atajos desde Expo:
# "a" Android, "i" iOS, "w" Web
```

No se requieren variables adicionales: Guardian/JSONPlaceholder son APIs públicas.

## Pruebas

```bash
npm test -- HomeScreen      # HomeScreen (skeleton/list/input)
npm test -- UsersScreen     # estados de la pestaña usuarios
npm test -- LoginScreen     # validación + submit
npm test -- UserScreen      # render y logout del perfil
npm test                    # suite completa
```

Las pruebas usan `jest-expo` y `@testing-library/react-native` con mocks de hooks/stores (`useNewsSearch`, `useUsers`, `useAuthStore`).

## Linting / formato

Proyecto configurado con ESLint/Prettier (`eslint.config.mjs`). Agrega un script `lint` en `package.json` si deseas ejecutarlo vía `npm run lint`.
