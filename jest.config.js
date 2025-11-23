module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@expo/vector-icons/(.*)$": "<rootDir>/__mocks__/expo-vector-icon.js",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|expo|expo-.*|@react-navigation|@expo)/)",
  ],
};
