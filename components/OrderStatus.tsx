/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const OrderStatus = () => {
  const orders = useSelector(state => state.OrderReducers);
  console.log(orders);
  const route = useRoute();
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon
        name={route.params.status === 'success' ? 'check' : 'times'}
        size={50}
        style={{color: route.params.status === 'success' ? 'green' : 'red'}}
      />
      <Text style={{marginTop: 20, fontSize: 20}}>
        {route.params.status === 'success'
          ? 'Your Order Placed Successfully!'
          : 'Order Failed'}
      </Text>
      <TouchableOpacity
        style={{
          width: 100,
          height: 50,
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0.6,
        }}
        onPress={() => {
          navigation.navigate('Hello');
        }}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};
//export default OrderStatus;
