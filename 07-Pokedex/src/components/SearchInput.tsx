import {View, StyleSheet, TextInput, StyleProp, ViewStyle} from 'react-native';
import {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import useDebouncedValue from '../hooks/useDebouncedValue';

interface Props {
  style?: StyleProp<ViewStyle>;
  onDebounce: (value: string) => void;
}
const SearchInput = ({style, onDebounce}: Props) => {
  const [textValue, setTextValue] = useState('');
  const debouncedValue = useDebouncedValue(textValue, 500);
  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue]);

  return (
    <View style={{...styles.container, ...(style as any)}}>
      <View style={styles.textBackgraund}>
        <TextInput
          placeholder="Buscar pokémon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="grey"
          value={textValue}
          onChangeText={setTextValue}
        />
        <Icon name="search-outline" color="grey" size={30} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'red',
  },
  textBackgraund: {
    backgroundColor: '#F3F1F3',
    borderRadius: 50,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    height: 40,
    top: 2,
    color: '#000',
  },
});

export default SearchInput;
