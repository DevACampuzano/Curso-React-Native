import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { styles } from './../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContexts';

interface Props extends StackScreenProps<RootStackParams, 'Persona'> { }

const PersonaScreen = ({ navigation, route }: Props) => {
    const params = route.params;
    const { changeUserName } = useContext(AuthContext);

    useEffect(() => {
        navigation.setOptions({
            title: params.name,
        });
    }, []);

    useEffect(() => changeUserName(params.name), []);

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>{
                JSON.stringify(params, null, 3)
            }</Text>
        </View>
    );
};

export default PersonaScreen;
