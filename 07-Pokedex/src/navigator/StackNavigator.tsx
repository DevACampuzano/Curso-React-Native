import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen, PokemonScreen, SearchScreen} from '../screens';
import {SimplePokemon} from '../interface/pokemonInterfaces';

export type RootStackParams = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  PokemonScreen: {
    simplePokemon: SimplePokemon;
    color: string;
  };
};

const Stack = createStackNavigator<RootStackParams>();

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
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
