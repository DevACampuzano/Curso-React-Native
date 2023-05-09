import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Text} from '.';

const Loading = () => {
  return (
    <View style={style.activityContainer}>
      <ActivityIndicator size={50} color="grey" />
      <Text>Cargando...</Text>
    </View>
  );
};

const style = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Loading;
