import { StackScreenProps } from '@react-navigation/stack';
import { View, ActivityIndicator, Dimensions, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import useMovies from '../hooks/useMovies';
import { MoviePoster, HorizontalSlider, GradientBackgraund } from '../components/';
import { getImageColors } from '../helpers/getColors';
import { useContext, useEffect } from 'react';
import { GradientContext } from '../context/GradientContext';

const { width } = Dimensions.get('window');

interface Props extends StackScreenProps<any, any> { }

const HomeScreen = ({ }: Props) => {

  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();
  const { setMainColors } = useContext(GradientContext);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
    setMainColors({ primary, secondary });
  };

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
        <ActivityIndicator color="blue" size={100} />
      </View>
    );
  }

  return (
    <GradientBackgraund>
      <ScrollView>
        <View style={{ marginTop: top + 20 }}>
          <View style={{ height: 440 }}>
            <Carousel
              data={nowPlaying}
              renderItem={({ item }: any) => <MoviePoster movie={item} />}
              sliderWidth={width}
              inactiveSlideOpacity={0.8}
              itemWidth={300}
              onSnapToItem={index => getPosterColors(index)} />
          </View>
          <HorizontalSlider title="Populares" movies={popular} />
          <HorizontalSlider title="Mejores Calificado" movies={topRated} />
          <HorizontalSlider title="Proximamente" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackgraund>
  );
};


export default HomeScreen;
