import AntDesign from "@expo/vector-icons/AntDesign";

export const CircleInfoIcon = ({ size = 24, color = "black", props }) => {
  return <AntDesign name="info-circle" size={size} color={color} {...props} />;
};

export const HomeIcon = ({ size = 24, color = "black", props }) => {
  return <AntDesign name="home" size={size} color={color} {...props} />;
};

export const Logo = ({ size = 24, color = "black", props }) => {
  return <AntDesign name="read" size={size} color={color} {...props} />;
};
