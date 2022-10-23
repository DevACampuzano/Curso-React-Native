/* eslint-disable space-infix-ops */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ContadorScreen = () => {
    const [contador, setContador] = useState(0);
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
        }}>
            <Text style={{
                fontSize: 40,
                textAlign: 'center',
            }}>
                Contador: {contador}
            </Text>
            <Button title="Contar" onPress={()=> setContador(contador+1)}/>
        </View>
    );
};

export default ContadorScreen;
