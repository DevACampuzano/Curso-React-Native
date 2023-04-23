import React, { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
//import { useNavigation } from '@react-navigation/native';

interface Props extends StackScreenProps<any, any> { }

const Pagina2Screen = ({ navigation }: Props) => {
  //const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
        headerBackTitle: '',
    });
}, []);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina2Screen </Text>
      <Button title="Ir pagina 3" onPress={() => navigation.navigate('Pagina3Screen')} />
    </View>
  );
};

export default Pagina2Screen;
