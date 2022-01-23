// Modules
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Screens
import User from '../screens/User';
import Home from '../screens/Home';
import Dates from '../screens/Dates';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  //
  return (
    <Drawer.Navigator screenOptions={{ headerTintColor: 'white' }}>
      <Drawer.Screen
        name='home'
        options={{ title: 'Inicio' }}
        component={Home}
      />
      <Drawer.Screen
        name='dates'
        options={{ title: 'Fechas' }}
        component={Dates}
      />
      <Drawer.Screen
        name='user'
        options={{ title: 'Usuario' }}
        component={User}
      />
    </Drawer.Navigator>
  );
}
