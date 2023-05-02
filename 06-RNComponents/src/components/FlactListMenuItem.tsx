import {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {MenuItem} from '../interface/appInterface';
import TextCustom from './TextCustom';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}
const FlactListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => navigation.navigate(menuItem.component as never)} //TODO: Aquí
    >
      <View style={styles.container}>
        <Icon name={menuItem.icon} color={colors.primary} size={23} />
        <TextCustom style={{...styles.itemText, color: colors.text}}>
          {menuItem.name}
        </TextCustom>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color={colors.primary} size={23} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 18,
  },
});

export default FlactListMenuItem;
