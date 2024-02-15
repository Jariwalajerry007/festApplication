/* eslint-disable prettier/prettier */

  import 'react-native-gesture-handler';
  import * as React from 'react';
  import {NavigationContainer} from '@react-navigation/native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  import {Welcome} from './screens/Welcome';
  import {Login} from './screens/Login';
  import {SignUp} from './screens/SignUp';
  import {Hello} from './screens/Hello';
  import {MyAddress} from './screens/MyAddress';
  import {AddAddress} from './screens/AddAddress';
  import {Checkout} from './screens/Checkout';
  import {OrderStatus} from './OrderStatus';
  import {Orders} from './screens/Orders';

  const Stack = createNativeStackNavigator();
  const AppNavigator = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Hello" component={Hello} />
          <Stack.Screen name="MyAddress" component={MyAddress} />
          <Stack.Screen name="AddAddress" component={AddAddress} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="OrderStatus" component={OrderStatus} />
          <Stack.Screen name="Orders" component={Orders} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  export default AppNavigator;
