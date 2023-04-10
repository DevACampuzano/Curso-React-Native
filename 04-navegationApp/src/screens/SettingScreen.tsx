/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, styles } from '../theme/appTheme';
import { useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> { }

const SettingScreen = ({ navigation }: Props) => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (<Icon
        name="menu-outline"
        style={{ marginLeft: 10 }}
        size={35}
        color={colors.primary}
        onPress={() => navigation.toggleDrawer()} />),
    });
  }, []);

  return (
    <View style={{ ...styles.globalMargin, marginTop: insets.top + 20 }}>
      <Text>SettingScreen</Text>
    </View>
  );
};

export default SettingScreen;
