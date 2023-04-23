import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../context/AuthContexts';
import { styles } from '../theme/appTheme';

const AlbumsScreen = () => {
    const { logout, authState: { isLoggedIn } } = useContext(AuthContext);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>AlbumsScreen</Text>
            {
                isLoggedIn && <Button title="Logout" onPress={logout} />
            }
        </View>
    );
};

export default AlbumsScreen;
