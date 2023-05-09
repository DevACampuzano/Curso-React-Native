import {Platform, View, FlatList, Dimensions} from 'react-native';
import {useEffect, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading, PokemonCard, SearchInput, Text} from '../components';
import usePokemonSearch from '../hooks/usePokemonSearch';
import {styles} from '../theme/appTheme';
import {SimplePokemon} from '../interface/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [pokemonFilterd, setPokemonFilterd] = useState<SimplePokemon[]>([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (term.length === 0) {
      return setPokemonFilterd([]);
    }
    if (isNaN(Number(term))) {
      const list = simplePokemonList.filter(poke =>
        poke.name.toLocaleLowerCase().includes(term.toLocaleLowerCase()),
      );
      setPokemonFilterd(list);
    } else {
      const list = simplePokemonList.find(poke => poke.id === term);
      setPokemonFilterd(list ? [list] : []);
    }
  }, [term]);
  if (isFetching) {
    return <Loading />;
  }

  return (
    <View
      style={{
        flex: 1,
        // top: ,
        marginHorizontal: 20,
      }}>
      <SearchInput
        onDebounce={setTerm}
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? top : top + 30,
        }}
      />
      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              ...styles.globalMargin,
              marginTop: Platform.OS === 'ios' ? top + 60 : top + 80,
              paddingBottom: 10,
            }}>
            {term}
          </Text>
        }
        data={pokemonFilterd}
        keyExtractor={({id}) => id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

export default SearchScreen;
