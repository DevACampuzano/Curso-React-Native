import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeScreen,
  Animation102Screen,
  Animation101Screen,
  SwitchScreen,
  AlertScreen,
  PullToRefresh,
  ModalScreen,
  InfiniteScrollScreen,
} from './../screens';
import InputScreen from '../screens/InputScreen';
import CustomSectionListScreen from '../screens/CustomSectionListScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
      <Stack.Screen name="InputScreen" component={InputScreen} />
      <Stack.Screen name="PullToRefresh" component={PullToRefresh} />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfiniteScrollScreen}
      />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustomSectionListScreen}
      />
    </Stack.Navigator>
  );
};

export default Navigator;
