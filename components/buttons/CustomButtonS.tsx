/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

export const CustomeButtonS = ({ onPress, text, type = 'PRIMARY', bgColor, fgColor, icon }) => {
    return (
        <Pressable onPress={onPress}
            style={[styles.container,
            styles['container_${type}'],
            bgColor ? { backgroundColor: bgColor } : {},
            ]}>
            <View style={styles.buttonContent}>
                {icon && <View>{icon}</View>}
                <Text style={[
                    styles.text,
                    styles[`text_${type}`],
                    fgColor ? { color: fgColor } : {},
                ]}>{text} </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '30%',
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        padding: 10,
        marginVertical: 50,
    },
    container_PRIMARY: {
        backgroundColor: 'green',
    },
    text: {
        fontWeight: 'bold',
        color: 'blacK',
    },
    text_PRIMARY: {
        fontWeight: 'bold',
        color: 'white',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },

});

export default CustomeButtonS;
