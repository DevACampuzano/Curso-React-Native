import {View, ActivityIndicator} from 'react-native';
import React from 'react';

const Loading = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5856D6',
      }}>
      <ActivityIndicator size={50} color="white" />
    </View>
  );
};

export default Loading;
