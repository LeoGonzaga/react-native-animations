import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';

import Pizza from './assets/pizza.png';
import About from './src/components/About';
import OrderModal from './src/components/OrderModal';
import Quantity from './src/components/Quantity';
import Title from './src/components/Title';
import colors from './src/constants/colors';

export default function App() {
  const [quantity, setQuantity] = useState<number>(1);
  const [visible, setVisible] = useState<boolean>(false);

  const handleIncrement = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  const handleDecrement = useCallback(() => {
    quantity > 0 ? setQuantity(quantity - 1) : null;
  }, [quantity]);

  const handleToggle = useCallback(() => {
    setVisible(!visible);
  }, [visible]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image source={Pizza} style={styles.image} resizeMode="contain" />
      <Title />
      <About />

      <View style={[styles.row, styles.wrapper]}>
        <Quantity
          increment={handleIncrement}
          decrement={handleDecrement}
          quantity={quantity}
        />
        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.5}
          onPress={handleToggle}
        >
          <Text style={styles.buttonText}>Order now</Text>
        </TouchableOpacity>
      </View>
      {visible && <OrderModal onClose={handleToggle} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '50%',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryButton: {
    width: 150,
    height: 60,
    backgroundColor: colors.details,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  wrapper: {
    justifyContent: 'space-around',
    width: '100%',
  },
});
