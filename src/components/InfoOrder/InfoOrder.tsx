import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../../constants/colors";

type Props = {
  image: any;
  title: string;
  subTitle: string;
};

export const InfoOrder = ({ image, title, subTitle }: Props) => {
  return (
    <View style={styles.row}>
      <Image source={image} style={styles.miniIcon} resizeMode="contain" />
      <View style={styles.wrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
  },
  wrapper: {
    paddingLeft: 15,
  },
  title: {
    color: colors.grey,
    fontSize: 18,
  },
  subTitle: {
    color: colors.text,
    fontSize: 22,
  },
  miniIcon:{
    width:30,
    height:'100%'
  }
});