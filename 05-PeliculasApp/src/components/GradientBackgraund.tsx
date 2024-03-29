import { useContext, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import useFade from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBackgraund = ({ children }: Props) => {
    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);
    const { opacity, fadeIn, fadeOut } = useFade();
    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut(0);
        });
    }, [colors]);

    return (
        <View style={{ flex: 1, backgroundColor:'#000' }}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, '#000']}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0.1, y: 0.1 }}
                end={{ x: 0.5, y: 0.6 }}
            />
            <Animated.View style={{ ...StyleSheet.absoluteFillObject, opacity }}>
                <LinearGradient
                    colors={[colors.primary, colors.secondary, '#000']}
                    style={StyleSheet.absoluteFillObject}
                    start={{ x: 0.1, y: 0.1 }}
                    end={{ x: 0.5, y: 0.6 }}
                />
            </Animated.View>
            {children}
        </View>
    );
};

export default GradientBackgraund;
