import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from './src/navigator/Navigator';
import {PermissionsProvider} from './src/context/PermissionsContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}
const AppState = ({children}: Props) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
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
