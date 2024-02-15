/* eslint-disable prettier/prettier */
import {View, Text, ActivityIndicator, Modal} from 'react-native';
import React, {useState} from 'react';

export const Loader = ({modalVisible, setModalVisible}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            width: 100,
            height: 100,
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <ActivityIndicator />
        </View>
      </View>
    </Modal>
  );
// eslint-disable-next-line prettier/prettier
};
