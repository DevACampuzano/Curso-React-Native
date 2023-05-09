import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonDetails, Text} from '../components';
import FadeInImage from '../components/FadeInImage';
import {usePokemon} from '../hooks/usePokemon';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {name, id, picture} = simplePokemon;
  const {top} = useSafeAreaInsets();
  const {isLoading, pokemon} = usePokemon(id);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          ...style.headerContainer,
          backgroundColor: color,
        }}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.pop()}
          style={{
            ...style.backButton,
            top: top + 5,
          }}>
          <Icon name="arrow-back-outline" color="white" size={35} />
        </TouchableOpacity>

        <Text
          style={{
            ...style.name,
            top: top + 40,
          }}>
          {name + '\n'}#{id}
        </Text>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={style.pokeball}
        />
        <FadeInImage uri={picture} style={style.pokemonImage} />
      </View>
      {isLoading ? (
        <View style={style.loadingIndicator}>
          <ActivityIndicator color={color} size={50} />
        </View>
      ) : (
        <PokemonDetails pokemon={pokemon} />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  name: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -15,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PokemonScreen;
