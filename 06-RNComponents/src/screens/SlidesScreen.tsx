import {useRef, useState, useContext} from 'react';
import {
  SafeAreaView,
  ImageSourcePropType,
  Dimensions,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Text} from '../components';
import {TouchableOpacity, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useAnimation from '../hooks/useAnimation';
import {StackScreenProps} from '@react-navigation/stack';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const {width: ScreenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

const SlidesScreen = ({navigation}: Props) => {
  const {fadeIn, fadeOut, opacity} = useAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = useRef(false);
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 40,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{width: 350, height: 400, resizeMode: 'center'}}
        />
        <Text style={style.title}>{item.title}</Text>
        <Text style={style.subtatile}>{item.desc}</Text>
      </View>
    );
  };

  const style = StyleSheet.create({
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: colors.primary,
    },
    subtatile: {
      fontSize: 16,
      color: colors.text,
    },
    btn: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      width: 140,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        data={items}
        renderItem={({item}) => renderItem(item)}
        sliderWidth={ScreenWidth}
        itemWidth={ScreenWidth}
        layout="default"
        onSnapToItem={index => {
          setActiveIndex(index);
          if (index === items.length - 1) {
            isVisible.current = true;
            fadeIn();
          } else if (isVisible.current) {
            fadeOut();
            isVisible.current = false;
          }
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeIndex}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: colors.primary,
          }}
        />
        <Animated.View style={{opacity}}>
          <TouchableOpacity
            style={style.btn}
            activeOpacity={0.8}
            onPress={() => {
              if (isVisible.current) {
                navigation.pop();
              }
            }}>
            <Text style={{fontSize: 25, color: 'white'}}>Entrar</Text>
            <Icon name="chevron-forward-outline" size={30} color="white" />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;
