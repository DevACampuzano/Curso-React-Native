import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interface/movieInterface';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const natigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => natigation.navigate('Detail' as never, movie as never)}
            activeOpacity={0.8}
            style={{ ...styles.button, height, width }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20,
    },
    imageContainer: {
        flex: 1,
        shadowColor: '#000',
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
    },
    button: {
        marginHorizontal: 2,
        paddingBottom: 20,
        paddingHorizontal: 7,
    },

});

export default MoviePoster;
