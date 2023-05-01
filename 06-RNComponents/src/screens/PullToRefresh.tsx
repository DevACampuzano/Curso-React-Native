import {RefreshControl, View} from 'react-native';
import React from 'react';
import {HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';
import {ScrollView} from 'react-native-gesture-handler';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PullToRefresh = () => {
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('termino');
      setRefreshing(false);
      setData('Hola mundo');
    }, 3500);
  };
  return (
    <ScrollView
      style={{
        marginTop: refreshing ? top : 0, //? ¿podriamos poner una animacion para evitar el salto cuando termina de cargar ?
      }}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856d6"
          colors={['white', 'red', 'orange']}
          style={{backgroundColor: '#5856d6'}}
          tintColor="white"
          title="Refreshing"
          titleColor="white"
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull To Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};

export default PullToRefresh;
