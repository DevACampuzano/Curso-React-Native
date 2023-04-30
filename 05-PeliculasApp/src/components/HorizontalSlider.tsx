import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MoviePoster from './MoviePoster';
import { Movie } from '../interface/movieInterface';

interface Props {
    movies: Movie[];
    title?: string;
}
const HorizontalSlider = ({ title, movies }: Props) => {

    return (
        <View style={{
            height: title ? 260 : 220,
        }}>
            {
                title && (<Text style={styles.title}>{title}</Text>)
            }
            <FlatList
                data={movies}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                renderItem={({ item }: any) => (
                    <MoviePoster movie={item} width={140} height={200} />
                )} />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        marginLeft: 10,
    },
});

export default HorizontalSlider;
