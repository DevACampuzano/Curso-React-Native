import React from 'react';
import {Text, TextProps} from 'react-native';

const TextCustom = (props: TextProps) => {
  const style = [{color: '#000'}, props.style];

  return (
    <Text {...props} style={style}>
      {props.children}
    </Text>
  );
};

export default TextCustom;
