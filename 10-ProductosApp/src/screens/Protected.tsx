import {Button, StyleSheet, View} from 'react-native';
import {Text} from '../components';
import React from 'react';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const Protected = () => {
  const {user, token, logOut} = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Protected</Text>
      <Button title="logout" color="#5856D6" onPress={logOut} />
      <Text>{JSON.stringify(user, null, 2)}</Text>
      <Text>{token}</Text>
    </View>
  );
};

export default Protected;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
