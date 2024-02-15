/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

//let name = '';
export const Profile = () => {
    const navigation = useNavigation();
    const name = 'Harsh';

    /*useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        name = await AsyncStorage.getItem('NAME');
    };*/

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    width: '100%',
                    height: 70,
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Text style={{ fontWeight: '600', fontSize: 18, marginLeft: 15 }}>
                    Profile
                </Text>
                <TouchableOpacity
                    style={{
                        width: 30,
                        height: 30,
                        marginRight: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Icon
                        name="cog"
                        size={24}
                        color="#000"
                    />
                </TouchableOpacity>
            </View>
            <Icon
                name="user-circle"
                size={80}
                style={{ alignSelf: 'center', marginTop: 30 }}
            />
            <Text style={{ alignSelf: 'center', marginTop: 20, fontSize: 18 }}>
                {name}
            </Text>
            <TouchableOpacity
                style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 50,
                    borderBottomWidth: 0.3,
                    marginTop: 20,
                    borderBottomColor: '#8e8e8e',
                    justifyContent: 'center',
                }}
                onPress={() => {
                    navigation.navigate('MyAddress');
                }}>
                <Text style={{}}>My Address</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 50,
                    borderBottomWidth: 0.3,
                    borderBottomColor: '#8e8e8e',
                    justifyContent: 'center',
                }}
                onPress={() => {
                    navigation.navigate('Orders');
                }}>
                <Text style={{}}>My Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width: '90%',
                    alignSelf: 'center',
                    height: 50,
                    borderBottomWidth: 0.3,
                    borderBottomColor: '#8e8e8e',
                    justifyContent: 'center',
                }}>
                <Text style={{}}>Offers</Text>
            </TouchableOpacity>
        </View>
    );
};
//export default Profile;