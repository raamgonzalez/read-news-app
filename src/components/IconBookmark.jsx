import theme from "@constants/theme";
import AnimatedIconButton from "@ui/AnimatedIconButton";
import { BookMarkIconOutline, BookMarkIconSolid } from "@ui/icons";

const IconBookMark = ({ toggleBookmark, bookmarked }) => {
  return (
    <AnimatedIconButton
      variant="pop"
      onPress={toggleBookmark}
      style={{ padding: 6 }}
    >
      {bookmarked ? (
        <BookMarkIconSolid color={theme.colors.warning} />
      ) : (
        <BookMarkIconOutline color={theme.colors.warning} />
      )}
    </AnimatedIconButton>
  );
};

export default IconBookMark;
