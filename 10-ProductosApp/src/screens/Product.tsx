import {useContext, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  Button,
  Image,
  Alert,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {Picker} from '@react-native-picker/picker';
import {ProductsStackParams} from '../routers/ProductsNavigator';
import {Text} from '../components';
import {useCategories} from '../hooks/useCategories';
import useForm from '../hooks/userForm';
import {ProductsContext} from '../context/ProductsContext';

interface Props extends StackScreenProps<ProductsStackParams, 'Product'> {}

const Product = ({route, navigation}: Props) => {
  const {id = '', name = ''} = route.params;
  const {categories} = useCategories();
  const {loadProductoById, addProduct, updateProduct} =
    useContext(ProductsContext);
  const {_id, categoriaId, nombre, img, onChange, setForm} = useForm({
    _id: id,
    categoriaId: '',
    nombre: name,
    img: '',
  });

  useEffect(() => {
    navigation.setOptions({
      title: nombre ? nombre : 'Sin nombre de producto',
    });
  }, [nombre]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    if (_id.length === 0) {
      return;
    }
    const product = await loadProductoById(id);
    setForm({
      _id: id,
      categoriaId: product.categoria._id,
      img: product.img || '',
      nombre: name,
    });
  };

  const saveOrUpdate = async () => {
    if (_id.length > 0) {
      updateProduct(categoriaId, nombre, id);
    } else {
      const tempCategoriaId = categoriaId || categories[0]._id;
      if (nombre.length === 0) {
        Alert.alert('Debe ingresar el nombre del Producto');
        return;
      }
      const newProduct = await addProduct(tempCategoriaId, nombre);
      onChange(newProduct._id, '_id');
    }
  };

  return (
    <View style={style.container}>
      <ScrollView>
        <Text style={style.label}>Nombre del Producto:</Text>
        <TextInput
          placeholder="Producto"
          style={style.textInput}
          value={nombre}
          onChangeText={v => onChange(v, 'nombre')}
        />

        <Text style={style.label}>Categoría:</Text>
        {categories.length > 0 && (
          <Picker
            style={{
              color: 'black',
              backgroundColor: 'rgba(0,0,0,0.1)',
              marginVertical: 10,
            }}
            dropdownIconColor="black"
            mode="dropdown"
            selectedValue={categoriaId}
            onValueChange={value => onChange(value, 'categoriaId')}>
            {categories.map(c => (
              <Picker.Item label={c.nombre} value={c._id} key={c._id} />
            ))}
          </Picker>
        )}
        <Button title="Guardar" onPress={saveOrUpdate} color="#5856D6" />
        {_id.length > 0 && (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Button title="Cámara" onPress={() => {}} color="#5856D6" />
            <View style={{width: 10}} />
            <Button title="Galeria" onPress={() => {}} color="#5856D6" />
          </View>
        )}

        {img.length > 0 && (
          <Image
            source={{uri: img}}
            style={{width: '100%', height: 300, marginTop: 20}}
          />
        )}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
  },
  textInput: {
    color: 'black',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 15,
  },
});

export default Product;
