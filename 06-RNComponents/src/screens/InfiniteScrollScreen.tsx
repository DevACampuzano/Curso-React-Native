import {ActivityIndicator, FlatList, View} from 'react-native';
import React, {useState} from 'react';
import {FadeInImage, HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';

const RenderLoading = () => {
  return (
    <View
      style={{
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <ActivityIndicator size={50} color="#5856D6" />
    </View>
  );
};
const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray.push(numbers.length + i);
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };
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
