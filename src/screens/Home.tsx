// Modules
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

// Data
import { headersHome } from '../dummyData';

// Styles
import generalStyles from '../styles/general';

// Colors
import { normalGreen } from '../utils/colors';

const { width } = Dimensions.get('window');

export default function Home() {
  return (
    <ScrollView style={{ paddingTop: 20 }}>
      <Carousel
        data={headersHome}
        renderItem={(data) => (
          <CardImage
            id={data.item.id}
            image={data.item.image}
            shortDescription={data.item.shortDescription}
          />
        )}
        sliderWidth={width}
        itemWidth={width - 40}
      />
      <View style={{ padding: 20, paddingTop: 0 }}>
        <View
          style={{
            padding: 20,
            paddingBottom: 15,
            backgroundColor: normalGreen,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 5,
              color: 'white',
            }}
          >
            Anim fugiat labore adipisicing aute magna officia veniam.
          </Text>
        </View>
        <View style={{ ...generalStyles.generalBody, marginBottom: 20 }}>
          <Text>
            Duis elit veniam aliquip mollit veniam ullamco veniam Lorem anim. Dolor
            nulla sint non dolore ullamco laboris ut in veniam id eiusmod aute est
            elit. Et quis enim qui qui ipsum quis. Eiusmod ullamco Lorem ullamco do
            laboris proident veniam magna amet exercitation consequat incididunt
            consequat.
          </Text>
        </View>
        <View
          style={{
            padding: 20,
            paddingBottom: 15,
            backgroundColor: normalGreen,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 5,
              color: 'white',
            }}
          >
            Anim fugiat labore adipisicing aute magna officia veniam.
          </Text>
        </View>
        <View style={generalStyles.generalBody}>
          <Text>
            Duis elit veniam aliquip mollit veniam ullamco veniam Lorem anim. Dolor
            nulla sint non dolore ullamco laboris ut in veniam id eiusmod aute est
            elit. Et quis enim qui qui ipsum quis. Eiusmod ullamco Lorem ullamco do
            laboris proident veniam magna amet exercitation consequat incididunt
            consequat.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
type CardImageProps = {
  id: number;
  image: string;
  shortDescription: string;
};

function CardImage({ id, image, shortDescription }: CardImageProps) {
  //
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      // @ts-ignore
      onPress={() => navigation.navigate('HeaderArticle', { id })}
    >
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={{
            width: '100%',
            height: 160,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
          }}
        />
        <View
          style={{
            ...generalStyles.generalBody,
            marginBottom: 20,
            paddingVertical: 15,
          }}
        >
          <Text style={{ fontWeight: 'bold' }}>{shortDescription}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
