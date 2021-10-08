import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../constants/colors';

export const About = () => {
  return (
    <View style={styles.about}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.subTitle}>
        A pizza margerita as the Italians call it a simple pizza hailinf from
        naples , the taste is of bread cheese and a tomato sauce made with ripes
        yomatoes the ...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    paddingRight: 19,
  },
  subTitle: {
    fontSize: 20,
    color: colors.subTitle,
  },

  about: {
    padding: 20,
    justifyContent: 'center',
  },
});
