import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

export const CircleInfoIcon = ({ size = 24, color = "black", props }) => {
  return <AntDesign name="info-circle" size={size} color={color} {...props} />;
};

export const HomeIcon = ({ size = 24, color = "black", props }) => {
  return <AntDesign name="home" size={size} color={color} {...props} />;
};

export const BackArrowIcon = ({ size = 24, color = "black", props }) => {
  return <AntDesign name="arrow-left" size={size} color={color} {...props} />;
};

export const BookMarkIconOutline = ({ size = 24, color = "black", props }) => {
  return <FontAwesome name="bookmark-o" size={size} color={color} {...props} />;
};

export const BookMarkIconSolid = ({ size = 24, color = "black", props }) => {
  return <FontAwesome name="bookmark" size={size} color={color} {...props} />;
};

export const UserIcon = ({ size = 24, color = "black", props }) => {
  return <FontAwesome name="user-o" size={size} color={color} {...props} />;
};

export const ShareIcon = ({ size = 24, color = "black", props }) => {
  return <AntDesign name="share-alt" size={size} color={color} {...props} />;
};

export const UsersIcon = ({ size = 24, color = "black", props }) => {
  return <Feather name="users" size={size} color={color} {...props} />;
};

export const Logo = ({ size = 24, color = "black", props }) => {
  return <AntDesign name="read" size={size} color={color} {...props} />;
};
