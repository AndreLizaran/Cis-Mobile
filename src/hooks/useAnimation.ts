// Modules
import { Animated } from 'react-native';

export default function useAnimation(ref: Animated.Value) {
  //
  function fadeIn() {
    Animated.timing(ref, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }

  return {
    fadeIn,
  };
}
