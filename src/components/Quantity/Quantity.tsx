import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import colors from '../../constants/colors';

export const Quantity = ({ increment, decrement,quantity }: any) => {
  return (
    <View style={[styles.row, styles.quantity]}>
      <TouchableHighlight style={styles.button} onPress={decrement}>
        <Text style={styles.subTitle}>-</Text>
      </TouchableHighlight>

      <Text style={styles.subTitle}>{quantity}</Text>

      <TouchableHighlight style={styles.button} onPress={increment}>
        <Text style={styles.subTitle}>+</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  subTitle: {
    fontSize: 20,
    color: colors.subTitle,
  },
  quantity: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.5,
  },
  button: {
    borderRadius: 10,
    width: 44,
    height: 44,
    backgroundColor: colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
