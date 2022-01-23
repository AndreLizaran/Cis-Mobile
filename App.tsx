// Modules
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

// Navigator
import DrawerNavigator from './src/navigation/DrawerNavigator';

const MyTheme = {
  dark: false,
  colors: {
    primary: '#FFF',
    background: 'rgb(242, 242, 242)',
    card: '#557C55',
    text: '#FFF',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
