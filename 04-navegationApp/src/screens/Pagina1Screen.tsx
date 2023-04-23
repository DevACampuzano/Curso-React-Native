// import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { styles } from '../theme/appTheme';
//import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';

// interface Props extends StackScreenProps<any, any> { }
interface Props extends DrawerScreenProps<any, any> { }

const Pagina1Screen = ({ navigation }: Props) => {

    /* useEffect(() => {
        if (Platform.OS === 'ios') {
            navigation.setOptions({
                headerLeft: () => (<Button
                    title="Menu"
                    onPress={() => navigation.toggleDrawer()} />),
            });
        }
    }, []); */

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina1Screen </Text>
            <Button title="Ir Pagina 2" onPress={() => navigation.navigate('Pagina2Screen')} />

            <Text> Navegar Con Argumentos</Text>
            <View style={{
                flexDirection: 'row',
            }}>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#5856D6',
                    }}
                    onPress={() => navigation.navigate('Persona', {
                        id: 1,
                        name: 'Pedro',
                    })}>
                    <Text style={styles.botonGrandeTexto}>
                        Pedro
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor: '#FF9427',
                    }}
                    onPress={() => navigation.navigate('Persona', {
                        id: 2,
                        name: 'Maria',
                    })}>
                    <Text style={styles.botonGrandeTexto}>
                        Maria
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Pagina1Screen;
