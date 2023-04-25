import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Cast } from '../interface/creaditsInterface';

interface Props {
    actor: Cast
}

const CasstItem = ({ actor }: Props) => {
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
    return (
        <View style={styles.container}>
            {
                actor.profile_path && (<Image source={{ uri }} style={styles.image} />)
            }
            <View style={styles.actorInfo}>
                <Text style={styles.name}>{actor.name}</Text>
                <Text style={styles.character}>{actor.character}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 5,
        flexDirection: 'row',
        backgroundColor: 'white',
        shadowColor: '#000',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 10,
        paddingRight: 15,
        height: 50,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    character: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
        opacity: 0.5,
    },
    actorInfo: {
        marginTop: 4,
        marginLeft: 10,
    },
});

export default CasstItem;
