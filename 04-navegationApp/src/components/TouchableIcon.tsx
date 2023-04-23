import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContexts';

interface Props {
    iconName: string;
}

const TouchableIcon = ({ iconName }: Props) => {
    const { ChangeFavoriteIcon } = useContext(AuthContext);
    return (
        <TouchableOpacity onPress={() => ChangeFavoriteIcon(iconName)}>
            <Icon name={iconName} size={80} color={colors.primary} />
        </TouchableOpacity>
    );
};

export default TouchableIcon;
