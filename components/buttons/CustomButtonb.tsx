/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

export const CustomeButtonb = ({ onPress, text }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text} </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width:'90',
        alignContent:'flex-end',
        alignItems:'flex-end',
        textAlign:'right',
    },
    text: {
        fontWeight: 'bold',
        color: 'black',
        textAlignVertical:'center',
        textAlign:'left',
    },
});

export default CustomeButtonb;
