import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

export const Title = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>Pizza Margerita</Text>
      <Text style={styles.price}>$18.95</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    paddingRight: 19,
  },

  price: {
    fontSize: 32,
    color: colors.details,
  },
});

