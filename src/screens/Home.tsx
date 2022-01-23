// Modules
import React from 'react';
import { Text, View } from 'react-native';

// Styles
import generalStyles from '../styles/general';

export default function Home() {
  return (
    <View style={generalStyles.container}>
      <Text style={generalStyles.generalTitle}>Home screen</Text>
    </View>
  );
}
