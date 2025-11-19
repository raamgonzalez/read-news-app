import { View } from "react-native";
import theme from "../constants/theme";

const Screen = ({ children }) => {
  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        paddingVertical: 16,
        flex: 1,
        paddingHorizontal: 16,
      }}
    >
      {children}
    </View>
  );
};

export default Screen;
