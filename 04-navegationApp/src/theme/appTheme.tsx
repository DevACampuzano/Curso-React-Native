import { StyleSheet } from 'react-native';

export const colors = {
    primary: '#5856D6',
    fondo: 'white',
};

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
        color: '#000',
    },
    botonGrande: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 20,
    },
    botonGrandeTexto: {
        color: 'white',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 10,
    },
    avatarContainer: {
        alignItems: 'center',
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 30,
        // alignItems: 'center',
    },
    menuBoton: {
        marginVertical: 10,
        flexDirection: 'row',
    },
    menuText: {
        fontSize: 20,
    },
});
