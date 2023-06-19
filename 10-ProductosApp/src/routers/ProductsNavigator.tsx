import {createStackNavigator} from '@react-navigation/stack';
import {Product, Products} from '../screens';

export type ProductsStackParams = {
  Products: undefined;
  Product: {id?: string; name?: string};
};
const Stack = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="Products"
        component={Products}
        options={{title: 'Productos'}}
      />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};
