/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from '../theme/appTheme';
import {FlactListMenuItem, HeaderTitle, ItemSeparator} from '../components';
import {menuItems} from '../data/menuItems';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlactListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menú" />}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
