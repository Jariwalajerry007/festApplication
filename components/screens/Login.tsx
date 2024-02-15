/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Logo from '../../assets/images/login.jpeg';
import CustomInput from '../buttons/CustomInput';
import CustomButton from '../buttons/CustomButton';
import CustomButtonb from '../buttons/CustomButtonb';
import CustomButtonS from '../buttons/CustomButtonS';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { Loader } from '../buttons/Loader';


export const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setBadPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const validate = () => {
    setBadEmail(false);
    setBadPassword(false);

    if (email.trim() === '') {
      setBadEmail(true);
      return false;
    }

    if (password.trim() === '') {
      setBadPassword(true);
      return false;
    }

    return true;
  };

  const onSigninPressed = () => {
    if (validate()) {
      navigation.navigate('Hello');
    }
  };

  return (
    <View style={styles.root}>
      <Image source={Logo} style={styles.logo} />
      <Text>Welcome to Login Page</Text>
      <CustomInput
        placeholder="Email"
        value={email}
        setValue={setEmail}
        onChangeText={() => setBadEmail(false)}
      />
      {badEmail && (
        <Text style={{ marginTop: 3, marginLeft: -220, color: 'red' }}>
          Please Enter Email Id
        </Text>
      )}
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={!showPassword}
        onChangeText={txt => {
          setPassword(txt); }}
      />
      {badPassword && (
        <Text style={{ marginTop: 10, marginLeft: 30, color: 'red' }}>
          Please Enter Password
        </Text>
      )}
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIconContainer}>
        <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#888" />
      </TouchableOpacity>

      <CustomButtonb text="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} />
      <CustomButton text="Sign in" onPress={onSigninPressed} type="PRIMARY" bgColor={undefined} fgColor={undefined} icon={undefined} />
      <CustomButtonb text="Create a new Account" onPress={() => navigation.navigate('SignUp')} />
      <Text style={styles.socialText}> Or login with Social Account </Text>
      <View style={styles.iconContainer}>
        <CustomButtonS
          onPress={() => navigation.navigate('Hello')}
          fgColor="#DD4D44"
          icon={<Icon name="google" size={30} color="red" />}
          style={{ marginLeft: 10 }}
        />
        <CustomButtonS
          onPress={() => navigation.navigate('Hello')}
          fgColor="#4765a9"
          icon={<Icon name="facebook-square" size={30} color="blue" />}
          style={{ marginRight: 10 }}
        />
      </View>
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 25,
    padding: 10,
  },
  socialText: {
    margin: 10,
    marginVertical: 30,
    marginBottom: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    width: '40%',
    marginVertical: 5,
  },
  eyeIconContainer: {
    position: 'relative',
    right: -160,
    top: -40,
    zIndex: 1,
  },
});
//export default Login;