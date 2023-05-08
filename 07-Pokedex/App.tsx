import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigator/StackNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
}

export default App;
