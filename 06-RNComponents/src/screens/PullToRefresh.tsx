import {RefreshControl, View} from 'react-native';
import {HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';
import {ScrollView} from 'react-native-gesture-handler';
import {useState, useContext} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const PullToRefresh = () => {
  const {top} = useSafeAreaInsets();
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

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
          progressBackgroundColor={colors.primary}
          colors={['white', 'red', 'orange']}
          style={{backgroundColor: colors.primary}}
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
