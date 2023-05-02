import {View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useContext} from 'react';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ItemSeparator = () => {
  const {
    theme: {dividerColor},
  } = useContext(ThemeContext);
  return <View style={{...styles.separator, borderColor: dividerColor}} />;
};
export default ItemSeparator;
