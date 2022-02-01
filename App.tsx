// Modules
import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from 'react-query';

// Colors
import { darkGray, normalGreen } from './src/utils/colors';

// Navigator
import StackNavigator from './src/navigation/StackNavigator';

// State
import ThemeState, { ThemeContext } from './src/contexts/ThemeContext';

LogBox.ignoreAllLogs();
const queryClient = new QueryClient();

export default function AppState() {
  return (
    <ThemeState>
      <App />
    </ThemeState>
  );
}

function App() {
  //
  const { theme } = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme === 'dark' ? darkTheme : lightTheme}>
      <QueryClientProvider client={queryClient}>
        <StatusBar backgroundColor={darkGray} barStyle='light-content' />
        <StackNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
}

const lightTheme: Theme = {
  dark: false,
  colors: {
    primary: normalGreen,
    background: 'string',
    card: darkGray,
    text: 'white',
    border: darkGray,
    notification: darkGray,
  },
};

const darkTheme: Theme = {
  dark: true,
  colors: {
    primary: normalGreen,
    background: darkGray,
    card: darkGray,
    text: 'white',
    border: darkGray,
    notification: darkGray,
  },
};
