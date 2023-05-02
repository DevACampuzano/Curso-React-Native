import {useContext, useEffect} from 'react';
import {View, StyleSheet, Animated, Button} from 'react-native';
import useAnimation from '../hooks/useAnimation';
import {ThemeContext} from '../context/themeContext/ThemeContext';
//import { Text } from '../components';

const Animation101Screen = () => {
  const {opacity, position, fadeIn, fadeOut, starMovigPosition} =
    useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    purpleBox: {
      backgroundColor: colors.primary,
      width: 150,
      height: 150,
      // marginBottom: 20,
    },
  });

  useEffect(() => {
    fadeIn();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{translateY: position}],
        }}
      />
      <Button
        title="FaceIn"
        onPress={() => {
          fadeIn();
          starMovigPosition(-100);
        }}
        color={colors.primary}
      />
      <Button
        title="FaceOut"
        onPress={() => fadeOut()}
        color={colors.primary}
      />
    </View>
  );
};

export default Animation101Screen;
