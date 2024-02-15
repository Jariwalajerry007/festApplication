/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import CustomInput from '../buttons/CustomInput';
import CustomButton from '../buttons/CustomButton';
import Icon from 'react-native-vector-icons/FontAwesome';


export const SignUp = props => {


  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const onRegisterPressed = () => {
    console.warn('Register');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Createing new Account</Text>
      <CustomInput placeholder="Username" value={username} setValue={setUsername} />
      <CustomInput placeholder="Email" value={email} setValue={setEmail} />
      <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={!showPassword} />
      <CustomInput placeholder="RepeatPassword" value={passwordRepeat} setValue={setPasswordRepeat} secureTextEntry={!showPassword} />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeiconContainer}>
        <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#888" />
      </TouchableOpacity>
      <CustomButton text="Register" onPress={onRegisterPressed} type="PRIMARY" bgColor={undefined} fgColor={undefined} icon={undefined} />
     <Text style={styles.privacy}> By registering, you confirm you accept our Terms of Use and Privacy Policy</Text>
      </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign:'left',
    fontSize:25,
    textDecorationColor:'pink',
    fontWeight:'bold',
  },
  privacy: {
    textAlign:'left',
    fontSize:10,
    textDecorationColor:'black',
    fontWeight:'100',
    fontStyle:'italic',
  },
  eyeiconContainer: {
    position: 'relative',
    right: -160,
    top: -40,
    zIndex: 1,
  },
});
//export default SignUp;
