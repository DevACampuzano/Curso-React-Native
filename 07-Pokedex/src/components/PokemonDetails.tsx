import {View, StyleSheet} from 'react-native';
import {PokemonFull} from '../interface/pokemonInterfaces';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from '.';
import FadeInImage from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
}

const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        ...StyleSheet.absoluteFillObject,
      }}>
      <View style={{...style.container, marginTop: 370}}>
        <Text style={style.title}>Types</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text
              style={{...style.regularText, marginRight: 10}}
              key={type.name}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={style.title}>Peso</Text>
        <Text style={style.regularText}>{pokemon.weight} lb</Text>
      </View>
      <View style={style.container}>
        <Text style={style.title}>Sprites</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={style.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={style.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={style.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={style.basicSprite}
        />
      </ScrollView>
      <View style={style.container}>
        <Text style={style.title}>Habilidades base</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              style={{...style.regularText, marginRight: 10}}
              key={ability.name}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={style.container}>
        <Text style={style.title}>Movimientos</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {pokemon.moves.map(({move}, index) => (
            <Text style={{...style.regularText, marginRight: 10}} key={index}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>

      <View style={style.container}>
        <Text style={style.title}>Stats</Text>
        <View>
          {pokemon.stats.map(({stat, base_stat}) => (
            <View key={stat.name} style={{flexDirection: 'row'}}>
              <Text style={{...style.regularText, marginRight: 10, width: 150}}>
                {stat.name}
              </Text>
              <Text style={{...style.regularText, fontWeight: 'bold'}}>
                {base_stat}
              </Text>
            </View>
          ))}
        </View>
        <View style={{marginBottom: 20, alignItems: 'center'}}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={style.basicSprite}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const style = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
  regularText: {
    fontSize: 19,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});

export default PokemonDetails;
