/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import CustomInput from '../buttons/CustomInput';
import CustomButton from '../buttons/CustomButton';
import CustomButtonb from '../buttons/CustomButtonb';

export const ForgotPassword = props => {
  const [username, setUsername] = useState('');

  const onSendPressed = () => {
    console.warn('onSendPressed');
  };
  const onSignInPressed = () => {
    console.warn('onSignInPressed');
  };
  const onResendPress = () => {
    console.warn('onResendPress');
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your Password</Text>
      <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
      />
      <CustomButton text="Send" onPress={onSendPressed} type="PRIMARY" />
      <CustomButton text="Resend code" onPress={onResendPress} type="PRIMARY" />
      <CustomButtonb
        text="Back to Signin"
        onPress={onSignInPressed}
        type="PRIMARY"
      />
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
    textAlign: 'left',
    fontSize: 25,
    textDecorationColor: 'pink',
    fontWeight: 'bold',
  },
  privacy: {
    textAlign: 'left',
    fontSize: 10,
    textDecorationColor: 'black',
    fontWeight: '100',
    fontStyle: 'italic',
  },
});
export default ForgotPassword;
