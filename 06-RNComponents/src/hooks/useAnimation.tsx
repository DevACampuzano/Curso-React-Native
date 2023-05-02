import {useRef} from 'react';
import {Animated, EasingFunction} from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = (duration: number = 300) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  };

  const starMovigPosition = (
    initPosition: number,
    duration: number = 300,
    easing?: EasingFunction,
  ) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      easing,
    }).start();
  };

  return {
    opacity,
    position,
    fadeIn,
    fadeOut,
    starMovigPosition,
  };
};

export default useAnimation;
