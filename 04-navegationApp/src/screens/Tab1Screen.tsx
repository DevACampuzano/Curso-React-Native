import React from 'react';
import { View, Text } from 'react-native';
import { colors, styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab1Screen = () => {
    const { top } = useSafeAreaInsets();

    return (
        <View style={[styles.globalMargin, { marginTop: top + 10 }]}>
            <Text style={styles.title}> Tab1Screen </Text>
            <Icon name="airplane-outline" size={30} color={colors.primary} />
        </View>
    );
};

export default Tab1Screen;
