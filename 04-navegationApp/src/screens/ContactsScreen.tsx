import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContexts';

const ContactsScreen = () => {
    const { singIn, authState: { isLoggedIn } } = useContext(AuthContext);
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>ContactsScreen</Text>
            {
                !isLoggedIn && <Button title="SingIn" onPress={singIn} />
            }
        </View>
    );
};

export default ContactsScreen;
