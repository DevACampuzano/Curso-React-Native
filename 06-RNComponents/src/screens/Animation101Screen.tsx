import { useEffect } from 'react';
import { View, StyleSheet, Animated, Button } from 'react-native';
import useAnimation from '../hooks/useAnimation';
//import { Text } from '../components';


const Animation101Screen = () => {
    const { opacity, position, fadeIn, fadeOut, starMovigPosition } = useAnimation();

    useEffect(() => {
        fadeIn();
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                opacity,
                transform: [{ translateY: position }],
            }} />
            <Button title="FaceIn" onPress={() => {
                fadeIn();
                starMovigPosition(100);
            }} />
            <Button title="FaceOut" onPress={() => fadeOut()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150,
        // marginBottom: 20,
    },
});

export default Animation101Screen;
