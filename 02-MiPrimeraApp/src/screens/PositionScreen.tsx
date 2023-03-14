import React from 'react'
import { StyleSheet, View } from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaVerde}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        // flex: 1,
        backgroundColor: '#28C4D9',
        // justifyContent:'center',
        // alignItems:'center',
        borderRadius: 25,
        width: 400,
        height: 400,
    },
    cajaMorada:{
        width: 100,
        height:100,
        backgroundColor: '#5856D6',
        borderRadius: 25,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 5,
        right: 5,
    },
    cajaNaranja:{
        width: 100,
        height:100,
        backgroundColor: '#F0A23B',
        borderRadius: 25,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
    cajaVerde:{
        width: 100,
        height:100,
        backgroundColor: 'green',
        borderRadius: 25,
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 5,
        left: 5,
    },
    
});

export default PositionScreen
