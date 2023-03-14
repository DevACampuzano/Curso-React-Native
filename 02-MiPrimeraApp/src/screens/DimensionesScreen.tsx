import React from 'react';
import { View, StyleSheet, Dimensions, Text, useWindowDimensions } from 'react-native';

// const {width,height} = Dimensions.get('window');
const DimensionesScreen = () => {
  const {width,height}=useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{...styles.cajaMorada,width: width*0.5}} />
      <View style={styles.cajaNaranja} />
      <Text style={styles.title}>
        W:{width} - H:{height}
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
    backgroundColor: 'red'
  },
  cajaMorada: {
    backgroundColor: '#5856d6',
    width: '50%',
    height: '50%',
  },
  cajaNaranja: {
    backgroundColor: '#D0A23B',
    width: '50%',
    height: '50%',
  },
  title:{
    fontSize: 30,
    textAlign: 'center',
  },
});

export default DimensionesScreen;
