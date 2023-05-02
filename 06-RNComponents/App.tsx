import 'react-native-gesture-handler';
import Navigator from './src/navigator/Navigator';
import {ThemeProvider} from './src/context/themeContext/ThemeContext';

interface AppStateProps {
  children: JSX.Element | JSX.Element[];
}

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: AppStateProps) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
