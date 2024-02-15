/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import * as Font from 'react-native';

export const Header = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: '#8e8e8e',
        backgroundColor: '#fff',
      }}>
      <LinearGradient colors={['#336e85', '#cd3e87', '#732ca5']} style={{
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      }} >

        <Text
          style={{
           // fontWeight: '500',
            fontSize: 30,
            color: '#ffffff',
            textAlign:'center',
            backgroundColor: 'transparent',
            fontFamily: 'GreatVibesRegular',

          }}>
          FestiveElement
        </Text>
      </LinearGradient>
      </View>
  );
};
      /*<TouchableOpacity
        style={{
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
          width: 50,
          height: 30,
        }}>
        <Text>Mode</Text>
      </TouchableOpacity>*/
    
//export default Header;