import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import StackNavigator from './StackNavigator';
import SettingScreen from '../screens/SettingScreen';
import { styles } from '../theme/appTheme';
// import { createStackNavigator } from '@react-navigation/stack';


const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();

// const SettingStackScreen = ()=>{
//     return(
//         <Stack.Navigator>
//             <Stack.Screen name="SettingsScreen" component={SettingScreen}/>
//         </Stack.Navigator>
//     );
// };

const MenuLateral = () => {
    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuInterno {...props} />}
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingScreen} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Parte del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                    }}
                    style={styles.avatar}
                />
            </View>
            {/* Opciones de menú */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('StackNavigator')}
                >
                    <Text style={styles.menuText}>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBoton}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <Text style={styles.menuText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};

export default MenuLateral;
