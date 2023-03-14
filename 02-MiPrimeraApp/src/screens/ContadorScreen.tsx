import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fab from '../components/Fab';

const ContadorScreen = () => {
    const [contador, setContador] = useState(0);
    return (
        <View style={style.root}>
            <Text style={style.textContador}>
                Contador: {contador}
            </Text>
            {/* <Button title="Contar" onPress={()=> setContador(contador+1)}/> */}
            <Fab title="+1" onPress={() => setContador(contador + 1)} />
            <Fab title="-1" onPress={() => setContador(contador - 1)} position="bl" />

            {/* <TouchableOpacity style={style.fabLocationBL} onPress={() => setContador(contador - 1)} >
                <View style={style.fab}>
                    <Text style={style.fabText}>
                        -1
                    </Text>
                </View>
            </TouchableOpacity> */}
        </View>
    );
};

const style = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
    },
    textContador: {
        fontSize: 40,
        alignSelf: 'center',
        color:'#262626',
    },
    });

export default ContadorScreen;
