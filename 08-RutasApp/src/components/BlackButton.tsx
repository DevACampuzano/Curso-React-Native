import {StyleSheet, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import TextCustom from './TextCustom';

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const BlackButton = ({title, onPress, style = {}}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        ...(style as any),
        ...styles.blackButton,
      }}>
      <TextCustom style={styles.bottonText}>{title}</TextCustom>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  blackButton: {
    height: 45,
    width: 200,
    backgroundColor: 'black',
    borderRadius: 50,
    justifyContent: 'center',
    color: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    elevation: 6,
  },
  bottonText: {
    color: 'white',
    fontSize: 18,
  },
});

//make this component available to the app
export default BlackButton;
