import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import React, {useState} from 'react';
import useAnimation from '../hooks/useAnimation';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style = {}}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoaded, setIsLoaded] = useState<boolean>(true);
  const onLoadEnd = () => {
    fadeIn();
    setIsLoaded(false);
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoaded && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="#5856D6"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={onLoadEnd}
        style={{
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};

export default FadeInImage;
