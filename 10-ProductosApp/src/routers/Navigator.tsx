import {createStackNavigator} from '@react-navigation/stack';
import {Loading, Login, Protected, Register} from '../screens';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';

const Stack = createStackNavigator();
const Navigator = () => {
  const {status} = useContext(AuthContext);

  if (status === 'checking') {
    return <Loading />;
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {status === 'authenticated' ? (
        <Stack.Screen name="Protected" component={Protected} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
