import React, { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  interpolate,
} from "react-native-reanimated";

import colors from "../../constants/colors";

export const Title = () => {
  const sharedVal = useSharedValue(-100);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: sharedVal.value }],
      opacity: interpolate(
        sharedVal.value,
        [-100, 0],
        [0, 1],
      ),
    };
  });

  useEffect(() => {
    sharedVal.value = withSpring(0);
  }, []);

  return (
    <Animated.View style={[styles.row, animatedStyles]}>
      <Text style={styles.title}>Pizza Margerita</Text>
      <Text style={styles.price}>$18.95</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.text,
    paddingRight: 19,
  },

  price: {
    fontSize: 32,
    color: colors.details,
  },
});
