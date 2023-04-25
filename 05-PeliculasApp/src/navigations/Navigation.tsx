import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, DetailScreen } from '../screens';
import { Movie } from '../interface/movieInterface';

export type RootStackParams ={
    Home: undefined;
    Detail: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

const Navigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
            cardStyle: {
                // backgroundColor: 'white',
            },
        }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
    );
};

export default Navigation;
