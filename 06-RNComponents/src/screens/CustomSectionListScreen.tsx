import React from 'react';
import {SectionList, View} from 'react-native';
// import {HeaderTitle} from '../components';
import {styles} from '../theme/appTheme';
import {HeaderTitle, ItemSeparator, Text} from '../components';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

const CustomSectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        sections={casas}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        renderSectionFooter={({section: {data}}) => (
          <HeaderTitle title={`Total: ${data.length}`} />
        )}
        renderSectionHeader={({section: {casa}}) => (
          <View style={{backgroundColor: 'white'}}>
            <HeaderTitle title={casa} />
          </View>
        )}
        SectionSeparatorComponent={ItemSeparator}
        ListHeaderComponent={<HeaderTitle title="Section List" />}
        ListFooterComponent={
          <View style={{marginBottom: 70}}>
            <HeaderTitle title={`Total de casas: ${casas.length}`} />
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CustomSectionListScreen;
