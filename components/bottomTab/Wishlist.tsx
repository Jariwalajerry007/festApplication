/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {CartItem} from '../screens/CartItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  removeFromCart,
  removeFromWishlist,
} from '../redux/action/Actions';

export const Wishlist = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers2);
  const dispatch = useDispatch();
  return (
    <View style={{flex:1}}>
      <FlatList
        data={cartData}
        renderItem={({item, index}) => {
          return (
            <CartItem
              isWishlist={'swe'}
              item={item}
              onRemoveFromWishlist={() => {
                dispatch(removeFromWishlist(index));
              }}
              onAddToCart={x => {
                dispatch(addItemToCart(x));
              }}
            />
          );
        }}
      />
    </View>
  );
};

//export default Wishlist;
