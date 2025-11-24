import theme from "@constants/theme";
import AnimatedIconButton from "@ui/AnimatedIconButton";
import { BookMarkIconOutline, BookMarkIconSolid } from "@constants/icons";

const IconBookMark = ({ toggleBookmark, bookmarked, size }) => {
  return (
    <AnimatedIconButton
      variant="pop"
      onPress={toggleBookmark}
      style={{ padding: 6 }}
    >
      {bookmarked ? (
        <BookMarkIconSolid color={theme.colors.warning} size={size} />
      ) : (
        <BookMarkIconOutline color={theme.colors.warning} size={size} />
      )}
    </AnimatedIconButton>
  );
};

export default IconBookMark;
