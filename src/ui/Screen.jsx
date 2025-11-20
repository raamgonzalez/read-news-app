import { View } from "react-native";
import theme from "@constants/theme";

const Screen = ({ children, paddingHorizontal = 16, style }) => {
  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.surface,
          flex: 1,
          paddingHorizontal,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Screen;
