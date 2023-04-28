import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../interface/appInterface';
import TextCustom from './TextCustom';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
    menuItem: MenuItem;
}
const FlactListMenuItem = ({ menuItem }: Props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate(menuItem.component as never)} //TODO: Aquí
        >
            <View style={styles.container}>
                <Icon name={menuItem.icon} color="#5856d6" size={23} />
                <TextCustom style={styles.itemText}>{menuItem.name}</TextCustom>
                <View style={{ flex: 1 }} />
                <Icon name="chevron-forward-outline" color="#5856d6" size={23} />
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
