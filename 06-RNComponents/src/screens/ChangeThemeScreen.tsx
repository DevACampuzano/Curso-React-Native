import {View, TouchableOpacity} from 'react-native';
import {useContext} from 'react';
import {HeaderTitle, Text} from '../components';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={setDarkTheme}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            borderRadius: 20,
            width: 120,
            height: 50,
          }}
          activeOpacity={0.8}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
            Dark
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setLightTheme}
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            borderRadius: 20,
            width: 120,
            height: 50,
          }}
          activeOpacity={0.8}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
            Light
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeThemeScreen;
