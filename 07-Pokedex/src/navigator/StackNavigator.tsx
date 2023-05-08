import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PokemonSreen from '../screens/PokemonSreen';

const Stack = createStackNavigator();

const Navigator = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonSreen" component={PokemonSreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
