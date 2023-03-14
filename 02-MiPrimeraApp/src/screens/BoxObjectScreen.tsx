import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxObjectScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Box Object Model</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 20,
    // width: 250,
    borderWidth: 10,
    paddingHorizontal: 100,
    paddingVertical: 20,
    marginVertical: 20,
  },
});
export default BoxObjectScreen;

