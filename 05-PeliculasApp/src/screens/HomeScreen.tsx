/* eslint-disable @typescript-eslint/no-unused-vars */
import { StackScreenProps } from '@react-navigation/stack';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import useMovies from '../hooks/useMovies';
import { MoviePoster, HorizontalSlider } from '../components/';

const { width } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { }
const HomeScreen = ({ navigation }: Props) => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="blue" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20 }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={nowPlaying}
            renderItem={({ item }: any) => <MoviePoster movie={item} />}
            sliderWidth={width}
            inactiveSlideOpacity={0.8}
            itemWidth={300} />
        </View>
        <HorizontalSlider title="Populares" movies={popular} />
        <HorizontalSlider title="Mejores Calificado" movies={topRated} />
        <HorizontalSlider title="Proximamente" movies={upcoming} />
      </View>
    </ScrollView>
  );
};


export default HomeScreen;
