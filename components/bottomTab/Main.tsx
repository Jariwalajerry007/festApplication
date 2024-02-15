/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Header} from '../screens/Header';
import {products} from '../Products';
import {ProductProperties} from '../screens/ProductProperties';
import {useDispatch, useSelector} from 'react-redux';
import {addItemToCart, addToWishlist} from '../redux/action/Actions';

export const Main = () => {
  const dispatch = useDispatch();
  const [categoryList, setCategoryList] = useState([]);
  const [giftingList, setGiftingList] = useState([]);
  const [celebrationList, setCelebrationList] = useState([]);
  const [decorList, setDecorsList] = useState([]);
  
  useEffect(() => {
    let categories = [];
    products.category.map(item => {
      categories.push(item.category);
    });
    setGiftingList(products.category[0].data);
    setCelebrationList(products.category[1].data);
    setDecorsList(products.category[2].data);
    setCategoryList(categories);
    console.log(JSON.stringify(products.category[0]));
  }, []);

  // const items = useSelector(state => state);
  // console.log(items);
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 1}}>
        <Header/>
        <Image
          source={require('../../assets/images/banner_1.jpg')}
          style={{
            width: '89%',
            height: 200,
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    height: 40,
                    borderRadius: 20,
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}>
                  <Text
                    style={{color: '#000', marginLeft: 10, marginRight: 10}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          Novalties
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={giftingList}
            renderItem={({item, index}) => {
              return (
                <ProductProperties
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 20,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New Celebrations
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={celebrationList}
            renderItem={({item, index}) => {
              return (
                <ProductProperties
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            marginLeft: 20,
            fontWeight: '600',
            color: '#000',
          }}>
          New Decors
        </Text>
        <View style={{marginTop: 8}}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={decorList}
            renderItem={({item, index}) => {
              return (
                <ProductProperties
                  item={item}
                  onAddWishlist={x => {
                    dispatch(addToWishlist(x));
                  }}
                  onAddToCart={x => {
                    dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
//export default Main;