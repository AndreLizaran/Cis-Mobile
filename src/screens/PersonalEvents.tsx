// Modules
import React from 'react';
import { View } from 'react-native';

// Styles
import generalStyles from '../styles/general';

// Components
import { EventsContainer } from './User';

export default function PersonalEvents() {
  return (
    <View style={generalStyles.container}>
      <EventsContainer />
    </View>
  );
}
