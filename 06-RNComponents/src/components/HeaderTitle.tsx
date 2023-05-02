import {useContext} from 'react';
import {View, StyleProp, TextStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Text from './TextCustom';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  title: string;
  styleText?: StyleProp<TextStyle>;
}
const HeaderTitle = ({title, styleText}: Props) => {
  const {top} = useSafeAreaInsets();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={[styles.title, {color: colors.text}, styleText]}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderTitle;
