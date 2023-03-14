import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const FlexScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.caja1}>Caja 1</Text>
        <Text style={styles.caja2}>Caja 2</Text>
        <Text style={styles.caja3}>Caja 3</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#28C4D9',
        alignItems: 'baseline'
    },
    caja1:{
        borderWidth: 2,
        borderColor: 'white',
        fontSize:30
    },
    caja2:{
        borderWidth: 2,
        borderColor: 'white',
        fontSize:30
    },
    caja3:{
        borderWidth: 2,
        borderColor: 'white',
        fontSize:30
    },
});
export default FlexScreen
