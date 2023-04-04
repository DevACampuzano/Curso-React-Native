import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina1Screen </Text>
            <Button title="Ir Pagina 2" onPress={() => navigation.navigate('Pagina2Screen')} />
        </View>
    );
};

export default Pagina1Screen;
