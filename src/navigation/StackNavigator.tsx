import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Login from '../screens/Login';
import NewUser from '../screens/NewUser';
import DrawerNavigator from './DrawerNavigator';
import ConfirmDate from '../modals/ConfirmDate';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerBackVisible: false }}>
      <Stack.Screen
        name='login'
        options={{ title: 'Inicia sesión' }}
        component={Login}
      />
      <Stack.Screen
        name='new-user'
        options={{ title: 'Regístrate' }}
        component={NewUser}
      />
      <Stack.Screen
        name='private'
        options={{ title: 'Home', headerShown: false }}
        component={DrawerNavigator}
      />
    </Stack.Navigator>
  );
}
