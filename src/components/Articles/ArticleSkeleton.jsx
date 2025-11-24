import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

import theme from "@constants/theme";

const DEFAULT_PLACEHOLDERS = {
  feed: 4,
  bookmark: 6,
};

const ArticleSkeleton = ({ variant = "feed", placeholders }) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(progress, {
          duration: 900,
          easing: Easing.inOut(Easing.ease),
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.timing(progress, {
          duration: 900,
          easing: Easing.inOut(Easing.ease),
          toValue: 0,
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();

    return () => {
      animation.stop();
      progress.stopAnimation();
    };
  }, [progress]);

  const shimmerStyle = {
    opacity: progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0.4, 1],
    }),
  };

  const total =
    placeholders ?? DEFAULT_PLACEHOLDERS[variant] ?? DEFAULT_PLACEHOLDERS.feed;

  const items = Array.from({ length: total }, (_, index) => index);

  return (
    <View style={styles.container} testID="article-skeleton">
      {items.map((item) =>
        variant === "bookmark" ? (
          <View key={item} style={styles.bookmarkRow}>
            <Animated.View style={[styles.bookmarkThumb, shimmerStyle]} />
            <View style={styles.bookmarkMeta}>
              <Animated.View style={[styles.lineSmall, shimmerStyle]} />
              <Animated.View style={[styles.lineBig, shimmerStyle]} />
            </View>
          </View>
        ) : (
          <View key={item} style={styles.card}>
            <Animated.View style={[styles.meta, shimmerStyle]}>
              <View style={styles.lineSmall} />
              <View style={styles.lineBig} />
            </Animated.View>
            <Animated.View style={[styles.hero, shimmerStyle]} />
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  bookmarkMeta: {
    flex: 1,
    gap: 8,
  },
  bookmarkRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  bookmarkThumb: {
    backgroundColor: theme.colors.skeletonBlock,
    borderRadius: theme.borderRadius.medium,
    height: 64,
    width: 64,
  },
  card: {
    gap: 12,
  },
  container: {
    gap: 20,
    paddingTop: 12,
  },
  hero: {
    backgroundColor: theme.colors.skeletonBlock,
    borderRadius: theme.borderRadius.medium,
    height: 220,
    width: "100%",
  },
  lineBig: {
    backgroundColor: theme.colors.skeletonLine,
    borderRadius: theme.borderRadius.small,
    height: 16,
    width: "90%",
  },
  lineSmall: {
    backgroundColor: theme.colors.skeletonLine,
    borderRadius: theme.borderRadius.small,
    height: 12,
    width: "65%",
  },
  meta: {
    gap: 8,
    paddingHorizontal: 4,
  },
});

export default ArticleSkeleton;
