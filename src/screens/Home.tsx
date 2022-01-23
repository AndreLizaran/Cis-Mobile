// Modules
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

// Styles
import generalStyles from '../styles/general';

// Colors
import { normalGray, normalGreen } from '../utils/colors';

export default function Home() {
  return (
    <ScrollView style={generalStyles.container}>
      <Image
        source={{
          uri: 'https://media.istockphoto.com/photos/cute-panda-biting-and-chewing-bamboo-branches-picture-id1308916465?k=20&m=1308916465&s=612x612&w=0&h=N76Pp3vfWK7P4PAJhcflVDWhkxH3pmm4H5ifyGnuMNc=',
        }}
        style={{
          width: '100%',
          height: 180,
          borderRadius: 5,
          marginBottom: 20,
        }}
      />
      <View style={{ borderRadius: 5 }}>
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
        <Text
          style={{ fontSize: 16, padding: 20, backgroundColor: normalGray }}
        >
          Duis elit veniam aliquip mollit veniam ullamco veniam Lorem anim.
          Dolor nulla sint non dolore ullamco laboris ut in veniam id eiusmod
          aute est elit. Et quis enim qui qui ipsum quis. Eiusmod ullamco Lorem
          ullamco do laboris proident veniam magna amet exercitation consequat
          incididunt consequat.
        </Text>
      </View>
    </ScrollView>
  );
}
