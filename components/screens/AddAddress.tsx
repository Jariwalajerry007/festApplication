/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../buttons/CustomInput';
import CommonButton from '../buttons/CustomButton';
import {useDispatch} from 'react-redux';
import {addAddress} from '../redux/action/Actions';
import Icon from 'react-native-vector-icons/FontAwesome';

export const AddAddress = () => {
  const navigation = useNavigation();
  const [city, setCity] = useState('');
  const [building, setBuilding] = useState('');
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: '100%',
          height: 70,
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            marginLeft: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 0.2,
            padding: 7,
            borderRadius: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <Icon
            name="arrow-back"
            size={24}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <CustomInput
        placeholder={'Enter City Name'}
        value={city}
        onChangeText={txt => {
          setCity(txt);
        }}
        icon={<Icon name="building" size={24} color="#000" />}
      />
      <CustomInput
        placeholder={'Enter Building Name'}
        value={building}
        onChangeText={txt => {
          setBuilding(txt);
        }}
        icon={<Icon name="building" size={24} color="#000" />}
      />
      <CustomInput
        placeholder={'Enter Pincode Name'}
        value={pin}
        keyboardType={'number-pad'}
        onChangeText={txt => {
          setPin(txt);
        }}
        icon={() => (
          <Icon name="map-marker" size={20} color="#000" />
        )}
      />
      <CommonButton
        title={'Save Address'}
        bgColor={'#000'}
        textColor={'#fff'}
        onPress={() => {
          if (city !== '' && building !== '' && pin !== '') {
            dispatch(
              addAddress({city: city, building: building, pincode: pin}),
            );
            navigation.goBack();
          }
        }}
      />
    </View>
  );
};
//export default AddAddress;