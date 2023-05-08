import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, PokemonSreen} from '../screens';

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
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonSreen" component={PokemonSreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
