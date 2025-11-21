import { View } from "react-native";
import { ShareIcon } from "@ui/icons";
import theme from "@constants/theme";
import AnimatedIconButton from "@ui/AnimatedIconButton";
import IconBookMark from "./IconBookmark";
import * as Linking from "expo-linking";

const HeaderRightDetail = ({ toggleBookmark, bookmarked, articleUrl }) => {
  const handleOpenLink = async () => {
    if (!articleUrl) return;
    const supported = await Linking.canOpenURL(articleUrl);
    if (supported) {
      await Linking.openURL(articleUrl);
    }
  };

  return (
    <View style={{ flexDirection: "row", gap: 24 }}>
      <IconBookMark toggleBookmark={toggleBookmark} bookmarked={bookmarked} />
      <AnimatedIconButton
        variant="pop"
        onPress={handleOpenLink}
        style={{ padding: 6 }}
      >
        <ShareIcon color={theme.colors.warning} />
      </AnimatedIconButton>
    </View>
  );
};

export default HeaderRightDetail;
