import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import StackNavigator from './StackNavigator';
import SettingScreen from '../screens/SettingScreen';


const Drawer = createDrawerNavigator();

const MenuLateralBasico = () => {
    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front',
        }}>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        </Drawer.Navigator>
    );
};

export default MenuLateralBasico;
