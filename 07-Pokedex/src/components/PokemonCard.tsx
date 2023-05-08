import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {SimplePokemon} from '../interface/pokemonInterfaces';
import {FadeInImage, Text} from './';

const {width: windowWidth} = Dimensions.get('window');
interface Props {
  pokemon: SimplePokemon;
}

const PokemonCard = ({pokemon}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={{...style.cardContainer, width: windowWidth * 0.4}}>
        <View>
          <Text style={style.name}>
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
    backgroundColor: 'red',
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
    color: 'white',
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
