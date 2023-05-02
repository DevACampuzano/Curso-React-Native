/* eslint-disable react/no-unstable-nested-components */
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useState, useContext} from 'react';
import {FadeInImage, HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray.push(numbers.length + i);
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const RenderLoading = () => (
    <View
      style={{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <ActivityIndicator size={50} color={colors.primary} />
    </View>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => (
          <FadeInImage
            uri={`https://picsum.photos/id/${item}/500/400`}
            style={{width: '100%', height: 400, borderRadius: 10}}
          />
        )}
        ListHeaderComponent={
          <View style={styles.globalMargin}>
            <HeaderTitle title="Infinite Scroll" />
          </View>
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={RenderLoading}
      />
    </View>
  );
};

export default InfiniteScrollScreen;
