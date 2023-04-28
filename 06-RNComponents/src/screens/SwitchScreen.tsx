import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderTitle, SwitchCustom, Text } from '../components';

const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });
    const { isActive, isHappy, isHungry } = state;

    const onChange = (value: boolean, field: keyof typeof state) => {
        setState({
            ...state,
            [field]: value,
        });
    };

    return (
        <View style={styles.container}>
            <HeaderTitle title="Swiches" />
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isActive </Text>
                <SwitchCustom isOn={isActive} onChange={(value) => onChange(value, 'isActive')} />
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isHungry </Text>
                <SwitchCustom isOn={isHungry} onChange={(value) => onChange(value, 'isHungry')} />
            </View>
            <View style={styles.switchRow}>
                <Text style={styles.switchText}>isHappy </Text>
                <SwitchCustom isOn={isHappy} onChange={(value) => onChange(value, 'isHappy')} />
            </View>
            <Text style={styles.switchText}>
                {
                    JSON.stringify(state, null, 5)
                }
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    switchText: {
        fontSize: 25,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical:10,
    },
});
export default SwitchScreen;
