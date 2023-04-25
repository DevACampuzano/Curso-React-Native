//import { Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigations/Navigation';
import { GradientProvider } from './src/context/GradientContext';
// import { FadeScreen } from './src/screens';

interface Props {
  children: JSX.Element | JSX.Element[]
}

const AppState = ({ children }: Props) => (
  <GradientProvider>
    {children}
  </GradientProvider>
);

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
