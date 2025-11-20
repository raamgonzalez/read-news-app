import { View } from "react-native";
import { ShareIcon } from "@ui/icons";
import theme from "@constants/theme";
import AnimatedIconButton from "@ui/AnimatedIconButton";
import IconBookMark from "./IconBookmark";

const HeaderRightDetail = ({ toggleBookmark, bookmarked }) => {
  return (
    <View style={{ flexDirection: "row", gap: 24 }}>
      <IconBookMark toggleBookmark={toggleBookmark} bookmarked={bookmarked} />
      <AnimatedIconButton variant="pop" style={{ padding: 6 }}>
        <ShareIcon color={theme.colors.warning} />
      </AnimatedIconButton>
    </View>
  );
};

export default HeaderRightDetail;
