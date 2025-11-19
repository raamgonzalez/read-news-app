/* eslint-disable react-hooks/refs */
import { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, View } from "react-native";

import theme from "../theme";

const PLACEHOLDERS = Array.from({ length: 8 }, (_, index) => index);

const ArticleSkeleton = () => {
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

  return (
    <View style={styles.container}>
      {PLACEHOLDERS.map((item) => (
        <View key={item} style={styles.row}>
          <Animated.View style={[styles.meta, shimmerStyle]}>
            <View style={styles.lineShort} />
            <View style={styles.lineLong} />
          </Animated.View>
          <Animated.View style={[styles.thumbnail, shimmerStyle]} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingTop: 16,
  },
  lineLong: {
    backgroundColor: theme.colors.skeletonLine,
    borderRadius: 4,
    height: 14,
    width: "80%",
  },
  lineShort: {
    backgroundColor: theme.colors.skeletonLine,
    borderRadius: 4,
    height: 12,
    width: "60%",
  },
  meta: {
    flex: 1,
    gap: 8,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    gap: 16,
  },
  thumbnail: {
    backgroundColor: theme.colors.skeletonBlock,
    borderRadius: 12,
    height: 64,
    width: 64,
  },
});

export default ArticleSkeleton;
