import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/routers/Navigator';
import {AuthProvider} from './src/context/AuthContext';

interface AppStateProps {
  children: JSX.Element | JSX.Element[];
}

const AppState = ({children}: AppStateProps) => {
  return <AuthProvider>{children}</AuthProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
