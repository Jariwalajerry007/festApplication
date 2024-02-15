/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { View, Text, StyleSheet, Image } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '../../assets/images/elements.jpg';
import { useNavigation } from '@react-navigation/native';

export const Welcome = () => {
  const navigation = useNavigation();
  useEffect(() => { setTimeout(() => { navigation.navigate('Login');
}, 3000);
}, []);
  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    borderRadius: 55,
    padding: 10,
  },
});
//export default Welcome;
