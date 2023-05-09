import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {useEffect, useRef, useState} from 'react';
import {SimplePokemon} from '../interface/pokemonInterfaces';
import {FadeInImage, Text} from './';
import ImageColors from 'react-native-image-colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

const {width: windowWidth} = Dimensions.get('window');
interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({pokemon}: Props) => {
  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);

  const history = useNavigation<StackNavigationProp<RootStackParams>>();

  const getBgColor = async () => {
    const result = await ImageColors.getColors(pokemon.picture, {
      fallback: 'grey',
    });
    if (!isMounted.current) {
      return;
    }
    let color;
    switch (result.platform) {
      case 'android':
        color = result.dominant;
        break;
      case 'ios':
        color = result.background;
        break;
      default:
        color = 'grey';
        break;
    }
    setBgColor(color || 'grey');
  };

  const onPress = () => {
    history.navigate('PokemonScreen', {
      simplePokemon: pokemon,
      color: bgColor,
    });
  };

  const getContrastColor = (hexColor: string) => {
    // Convertir el color hexadecimal a RGB
    const r = parseInt(hexColor.substring(1, 3), 16) / 255;
    const g = parseInt(hexColor.substring(3, 5), 16) / 255;
    const b = parseInt(hexColor.substring(5, 7), 16) / 255;

    // Calcular el brillo
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Devolver "black" si el brillo es alto, "white" si no lo es
    return brightness > 0.6 ? 'black' : 'white';
  };

  useEffect(() => {
    getBgColor();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
      <View
        style={{
          ...style.cardContainer,
          width: windowWidth * 0.4,
          backgroundColor: bgColor,
        }}>
        <View>
          <Text style={{...style.name, color: getContrastColor(bgColor)}}>
            {pokemon.name}
            {'\n #' + pokemon.id}
          </Text>
        </View>
        <View style={style.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={style.pokebola}
          />
        </View>
        <FadeInImage uri={pokemon.picture} style={style.pokemonImage} />
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    right: -25,
    bottom: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5,
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.6,
  },
});

export default PokemonCard;
