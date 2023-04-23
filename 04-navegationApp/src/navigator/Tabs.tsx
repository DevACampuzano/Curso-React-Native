import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, TouchableOpacity } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TopTabsNavigator from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useEffect } from 'react';

interface Props extends DrawerScreenProps<any, any> { }

const Tabs = ({ navigation }: Props) => {
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={() => navigation.toggleDrawer()} >
                    <Icon
                        name="menu-outline"

                        size={35}
                        color={colors.primary}
                    />
                </TouchableOpacity>),
        });
    }, []);

    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator sceneAnimationEnabled
            inactiveColor="white"
            activeColor="#000"
            barStyle={{
                backgroundColor: colors.primary,
            }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'images-outline';
                            break;

                        case 'TopTabsNavigator':
                            iconName = 'tablet-portrait-outline';
                            break;

                        case 'StackNavigator':
                            iconName = 'compass-outline';
                            break;
                    }
                    return (
                        <Icon name={iconName} size={25} color={color} />
                    );
                },
            })}>
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="TopTabsNavigator" options={{ title: 'Tab2' }} component={TopTabsNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
};

const BottomTabIOS = createBottomTabNavigator();
const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{ backgroundColor: colors.fondo }}
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'images-outline';
                            break;

                        case 'TopTabsNavigator':
                            iconName = 'tablet-portrait-outline';
                            break;

                        case 'StackNavigator':
                            iconName = 'compass-outline';
                            break;
                    }
                    return (
                        <Icon name={iconName} size={25} color={color} />
                    );
                },
            })}>
            {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text> }} component={Tab1Screen} /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="TopTabsNavigator" options={{ title: 'Tab2' }} component={TopTabsNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Stack' }} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
};

export default Tabs;
