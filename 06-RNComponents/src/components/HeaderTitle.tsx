import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from './TextCustom';
import { styles } from '../theme/appTheme';
interface Props {
    title: string;
}
const HeaderTitle = ({ title }: Props) => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={{ marginTop: top + 20, marginBottom: 20 }}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default HeaderTitle;
