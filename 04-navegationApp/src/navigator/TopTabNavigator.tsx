import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreen from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const TopTabsNavigator = () => {

    const { top: paddingTop } = useSafeAreaInsets();
    return (
        <Tab.Navigator
            style={{ paddingTop}}
            sceneContainerStyle={{
                backgroundColor: colors.fondo,
            }}
            screenOptions={({ route }) => ({
                tabBarPressColor: colors.primary,
                // tabBarPressOpacity: 100,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.primary,
                },
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    shadowColor: 'transparent',
                    elevation: 0,
                },
                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'chatbox-ellipses-outline';
                            break;

                        case 'Contacts':
                            iconName = 'call-outline';
                            break;

                        case 'Albums':
                            iconName = 'images-outline';
                            break;
                    }
                    return (
                        <Icon name={iconName} size={25} color={color} />
                    );
                },
            })}
        >
            <Tab.Screen name="Chat" options={{}} component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
};

export default TopTabsNavigator;
