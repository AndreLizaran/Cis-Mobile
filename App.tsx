// Modules
import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';

LogBox.ignoreAllLogs();

// Navigator
import StackNavigator from './src/navigation/StackNavigator';

const MyTheme = {
  dark: false,
  colors: {
    primary: '#FFF',
    background: 'rgb(242, 242, 242)',
    card: '#557C55',
    text: '#FFF',
    border: 'rgb(199, 199, 204)',
    notification: '#FFF',
  },
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <QueryClientProvider client={queryClient}>
        <StackNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
}
