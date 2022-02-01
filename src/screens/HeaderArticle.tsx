// Modules
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Text, View } from 'react-native';
import { DrawerStackParams } from '../navigation/DrawerNavigator';

// Styles
import generalStyles from '../styles/general';

interface Props extends NativeStackScreenProps<DrawerStackParams, 'HeaderArticle'> {}

export default function HeaderArticle({ route }: Props) {
  //
  const { id } = route.params;

  return (
    <View style={generalStyles.container}>
      <Text>Aquí se recibe el id del artículo. ID: {id}</Text>
    </View>
  );
}
