/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';

// interface RouterParams {
//     id: number;
//     name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'Persona'> {}

const PersonaScreen = ({ navigation, route }: Props) => {
    const params = route.params;
    useEffect(() => {
        navigation.setOptions({
            title: params.name,
        });
    }, []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{
                JSON.stringify(params, null, 3)
            }</Text>
        </View>
    );
};

export default PersonaScreen;
