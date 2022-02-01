// Modules
import React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Colors
import { normalGray } from '../utils/colors';

// Styles
import generalStyles from '../styles/general';

export type ItemProps = {
  id: number;
  image: string;
  shortDescription: string;
  bgColor: string;
};

type Props = {
  item: ItemProps;
};

export default function HeaderImage({ item }: Props) {
  //
  const navigation = useNavigation();
  const { id, image, shortDescription, bgColor } = item;

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
            paddingVertical: 15,
            backgroundColor: bgColor,
          }}
        >
          <Text style={{ fontSize: 12 }}>{shortDescription}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export function LoadingHeaderImage() {
  return (
    <View
      style={{
        height: 220,
        width: '100%',
        borderRadius: 5,
        borderColor: normalGray,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ActivityIndicator color={normalGray} />
    </View>
  );
}
