// Modules
import React, { useState } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

// Components
import H2 from '../components/H2';
import HeaderImage from '../components/HeaderImage';

// Data
import { headersHome } from '../dummyData';

// Styles
import { darkGray, lightGray } from '../utils/colors';
import { useGetTalleres } from '../hooks/useGetDates';

const { width } = Dimensions.get('window');

export default function Home() {
  return (
    <ScrollView style={{ paddingTop: 20 }}>
      <View style={{ paddingHorizontal: 20 }}>
        <H2 text='Artículos recientes' />
      </View>
      <ArticlesCarousel />
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        <H2 text='Eventos próximos' />
        <EventsContainer />
      </View>
    </ScrollView>
  );
}

function ArticlesCarousel() {
  const [articlesCarrouselIndex, setArticlesCarrouselIndex] = useState(0);
  return (
    <>
      <Carousel
        data={headersHome}
        renderItem={({ item }) => <HeaderImage item={item} />}
        sliderWidth={width}
        itemWidth={width - 40}
        onSnapToItem={(index) => setArticlesCarrouselIndex(index)}
      />
      <Pagination
        dotsLength={headersHome.length}
        activeDotIndex={articlesCarrouselIndex}
        dotColor={darkGray}
      />
    </>
  );
}

function EventsContainer() {
  const { isLoading, isFetching, data } = useGetTalleres();
  return (
    <View
      style={{
        width: '100%',
      }}
    ></View>
  );
}

function EventItem() {
  return (
    <View
      style={{
        paddingVertical: 15,
        borderRadius: 5,
        backgroundColor: lightGray,
        marginBottom: 20,
      }}
    ></View>
  );
}
