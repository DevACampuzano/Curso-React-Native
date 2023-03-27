import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

interface Props {
    texto: string;
    color?: string;
    colorText?: string;
    anchor?: boolean;
    accion: (text: string) => void;
}

const BottomCalc = (props: Props) => {
    const { texto, color = '#2D2D2D', colorText = 'white', anchor = false, accion = () => { } } = props
    return (
        <TouchableOpacity onPress={() => accion(texto)}>
            <View style={[styles.bottom, { backgroundColor: color, width: (anchor) ? 180 : 80 }]}>
                <Text style={[styles.bottomText, { color: colorText }]}>{texto}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    bottom: {
        height: 80,
        width: 80,
        backgroundColor: '#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    bottomText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
    }
});

export default BottomCalc