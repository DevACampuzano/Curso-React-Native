import React from 'react';
import { View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components';

const Tab1Screen = () => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={[styles.globalMargin, { marginTop: top + 10, flexDirection: 'row'}]}>
            <TouchableIcon iconName="airplane-outline" />
            <TouchableIcon iconName="bonfire-outline" />
        </View>
    );
};

export default Tab1Screen;
