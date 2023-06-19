/* eslint-disable react/no-unstable-nested-components */
import {useContext, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Text} from '../components';
import {ProductsContext} from '../context/ProductsContext';
import {ProductsStackParams} from '../routers/ProductsNavigator';
interface Props extends StackScreenProps<ProductsStackParams, 'Products'> {}

const Products = ({navigation}: Props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const {products, loadProducts} = useContext(ProductsContext);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.6}
          style={{marginRight: 10}}
          onPress={() => navigation.navigate('Product', {})}>
          <Text>Agregar</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  const loadProductsFromBackend = async () => {
    setIsRefreshing(true);
    await loadProducts();
    setIsRefreshing(false);
  };

  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <FlatList
        data={products}
        keyExtractor={p => p._id}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() =>
              navigation.navigate('Product', {id: item._id, name: item.nombre})
            }>
            <Text style={style.ProductName}> {item.nombre}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={style.itemSeparator} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadProductsFromBackend}
          />
        }
      />
    </View>
  );
};

const style = StyleSheet.create({
  ProductName: {
    fontSize: 20,
  },
  itemSeparator: {
    borderBottomWidth: 2,
    marginVertical: 5,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
});

export default Products;
