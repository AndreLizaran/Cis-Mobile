// Modules
import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';

LogBox.ignoreAllLogs();

// Navigator
import StackNavigator from './src/navigation/StackNavigator';
import { darkGray } from './src/utils/colors';

const MyTheme = {
  dark: false,
  colors: {
    primary: '#FFF',
    background: 'rgb(242, 242, 242)',
    card: darkGray,
    text: '#FFF',
    border: darkGray,
    notification: '#FFF',
  },
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <QueryClientProvider client={queryClient}>
        <StatusBar backgroundColor={darkGray} barStyle='light-content' />
        <StackNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
