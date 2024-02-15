/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
//import Loader from '../buttons/Loader';
import {Main} from '../bottomTab/Main';
import {Search} from '../bottomTab/Search';
import {Cart} from '../bottomTab/Cart';
import {Wishlist} from '../bottomTab/Wishlist';
import {Profile} from '../bottomTab/Profile';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';


export const Hello = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const data = useSelector(state => state);

  return (
    <View style={{flex: 1}}>
      {selectedTab === 0 ? (
        <Main />
      ) : selectedTab === 1 ? (
        <Search />
      ) : selectedTab === 2 ? (
        <Cart />
      ) : selectedTab === 3 ? (
        <Wishlist />
      ) : (
        <Profile />
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          height: 60,
          flexDirection: 'row',
          backgroundColor: '#fff',
          elevation: 5,
        }}>
        <TouchableOpacity
  style={{
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  onPress={() => {
    setSelectedTab(0);
  }}>
  <Icon
    name="home"
    size={24}
    color={selectedTab === 0 ? '#000' : '#8e8e8e'}
  />
</TouchableOpacity>
<TouchableOpacity
  style={{
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  onPress={() => {
    setSelectedTab(1);
  }}>
  <Icon
    name="search"
    size={24}
    color={selectedTab === 1 ? '#000' : '#8e8e8e'}
  />
</TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: selectedTab == 2 ? 'green' : '#000',
            justifyContent: 'center',
            borderRadius: 25,
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Icon
        name="shopping-bag"
        size={24}
        color="#fff"
      />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 5,
              right: 5,
            }}>
            <Text style={{color: '#fff', fontWeight: '600'}}>
              {data.Reducers.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Icon
        name="heart"
        size={24}
        color={selectedTab === 3 ? '#000' : '#8e8e8e'}
      />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: 'red',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              top: 15,
              right: 20,
            }}>
            <Text style={{color: '#fff', fontWeight: '600'}}>
              {data.Reducers2.length}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Icon
        name="user"
        size={24}
        color={selectedTab === 4 ? '#000' : '#8e8e8e'}
      />
        </TouchableOpacity>
      </View>
    </View>
  );
};
//export default Hello;
