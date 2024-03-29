/* eslint-disable react/self-closing-comp */
import { View, Animated, Button } from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {

  const { fadeIn, fadeOut, opacity } = useFade();

  return (
    <View style={{ flex: 1, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View style={{
        backgroundColor: '#084F6A',
        width: 150,
        height: 150,
        borderColor: 'white',
        borderWidth: 10,
        opacity,
        marginBottom: 20,
      }}>
      </Animated.View>
      <Button title="FadeIn" onPress={() => fadeIn()} />
      <Button title="FadeOut" onPress={() => fadeOut()} />
    </View>
  );
};

export default FadeScreen;
