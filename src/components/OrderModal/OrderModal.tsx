import React, { useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import colors from "../../constants/colors";
import Delivery from "../../../assets/delivery.png";
import Clock from "../../../assets/clock.png";
import Pin from "../../../assets/location.png";
import InfoOrder from "../../components/InfoOrder";

type Props = {
  onClose: () => void;
};

export const OrderModal = ({ onClose }: Props) => {
  const scaleVal = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(scaleVal.value) }],
    };
  });

  useEffect(() => {
    scaleVal.value = withSpring(1);
  }, []);

  return (
    <Animated.View style={[styles.container, animatedStyles]}>
      <View style={styles.row}>
        <Image source={Delivery} style={styles.icon} />
        <View>
          <Text style={styles.title}>Food is on the way</Text>
          <Text style={styles.subTitle}>Order #53434</Text>
          <Text style={styles.subTitle}>Pizza Margerita</Text>
          <Text style={styles.subTitle}>€12,50</Text>
        </View>
      </View>
      <View style={styles.wrapper}>
        <InfoOrder image={Clock} title="Delivery time" subTitle="11 minutes" />
        <InfoOrder
          image={Pin}
          title="Current location"
          subTitle="Floor 14 Baraki Alger"
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.2}
          onPress={onClose}
        >
          <Text style={styles.textButton}>Back to order</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.details,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
    position: "absolute",
    top: "50%",
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 10,
  },
  wrapper: {
    backgroundColor: "#fff",
    width: "100%",
    height: "80%",
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  subTitle: {
    fontSize: 16,
    color: "#fff",
  },
  button: {
    backgroundColor: "#FEE6E4",
    margin: 10,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: colors.details,
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    width: 120,
    height: 120,
  },
});
