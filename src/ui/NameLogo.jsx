import { Link } from "expo-router";
import TextStyle from "./TextStyle";
import theme from "@constants/theme";

const NameLogo = ({ color = theme.colors.textTitle }) => {
  return (
    <Link href="/" asChild>
      <TextStyle
        color={color}
        fontWeight={theme.fontWeights.bold}
        style={{ fontStyle: "italic" }}
        fontSize={25}
      >
        Prisma News
      </TextStyle>
    </Link>
  );
};

export default NameLogo;
