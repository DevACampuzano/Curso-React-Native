import React from 'react';
import { View, Image, StyleSheet, Dimensions, ScrollView, Text, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigations/Navigation';
import useDetail from '../hooks/useMovieDetails';
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height } = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { }

const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route.params;
  const { isLoading, cast, movieFull } = useDetail(movie.id);
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image
            source={{ uri }}
            style={styles.posterImage}
          />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subTitle}>{movie.original_title}</Text>
        <Text style={styles.title}>{movie.title}</Text>
      </View>
      {
        isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator color="blue" size={40} style={{ marginTop: 20 }} />
          </View>
        ) :
          (
            <MovieDetails movieFull={movieFull!} cast={cast} />
          )
      }
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon color="white" name="arrow-back-outline" size={60} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: height * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 7,
    elevation: 10,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 18,
    color: '#000',
    opacity: 0.8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 5,
    elevation: 9,
    zIndex:999,
  },
});

export default DetailScreen;
