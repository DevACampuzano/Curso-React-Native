import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';
//import { useNavigation } from '@react-navigation/native';

interface Props extends StackScreenProps<any, any> { }
const Pagina3Screen = ({ navigation }: Props) => {

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina3Screen </Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir al Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Pagina3Screen;
