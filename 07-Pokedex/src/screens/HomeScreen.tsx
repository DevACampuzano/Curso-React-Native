import {
  Image,
  FlatList,
  ActivityIndicator,
  View,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import {styles} from '../theme/appTheme';
import {PokemonCard, Text} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/StackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'HomeScreen'> {}
const HomeScreen = ({navigation}: Props) => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          ListHeaderComponent={
            <Text
              style={{
                ...styles.title,
                ...styles.globalMargin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              Pokedex
            </Text>
          }
          data={simplePokemonList}
          keyExtractor={({id}) => id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => navigation.navigate('SearchScreen')}
        style={{
          position: 'absolute',
          right: 20,
          bottom: 20,
          height: 60,
          width: 60,
          backgroundColor: 'black',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 30,
        }}>
        <Icon name="search-outline" color="white" size={40} />
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;
