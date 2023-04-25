import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import currencyFormatter from 'currency-formatter';
import { MovieFull } from '../interface/movieInterface';
import { Cast } from '../interface/creaditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import CasstItem from './CasstItem';

interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star-outline" color="grey" size={16} />
                    <Text>{movieFull.vote_average.toFixed(1)} </Text>
                    <Text>
                        - {movieFull.genres.map(g => g.name).join(', ')}
                    </Text>
                </View>
                <Text style={styles.title}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>
                    {movieFull.overview}
                </Text>
                <Text style={styles.title}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 18 }}>
                    {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
                </Text>
            </View>
            <View style={styles.constectFlatList}>
                <Text style={styles.title}>
                    Actores
                </Text>
                <FlatList
                    style={{ marginTop: 10, height: 70 }}
                    horizontal
                    data={cast}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) =>
                        item.id.toString()
                    }
                    renderItem={({ item }) =>
                        <CasstItem actor={item} />
                    } />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 23,
        marginTop: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    constectFlatList: {
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 100,
    },
});

export default MovieDetails;
