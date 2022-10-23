/* eslint-disable quotes */
import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native';
import FabProps from '../interfaces/FabProps';

const Fab = ({ onPress, title, position = 'br' }: FabProps) => {
    const ios = () => (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={onPress}
            style={[
                style.fabLocation,
                (position === 'br') ? style.right : style.left,
            ]}>
            <View style={style.fab}>
                <Text style={style.fabText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );

    const android = () => (
        <View style={[
            style.fabLocation,
            (position === 'br') ? style.right : style.left,
        ]}>
            <TouchableNativeFeedback
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple('#010194', false, 30)}>
                <View style={style.fab}>
                    <Text style={style.fabText}>
                        {title}
                    </Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );

    return (Platform.OS === 'ios') ? ios() : android();
};

const style = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },
    fab: {
        borderRadius: 100,
        backgroundColor: 'blue',
        width: 60,
        height: 60,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});


export default Fab;
