// Modules
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { StatusBar } from 'react-native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

// Screens
import User, { FirstLetterBox } from '../screens/User';
import Home from '../screens/Home';
import Dates from '../screens/Dates';

// Colors
import { normalGreen } from '../utils/colors';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerTintColor: 'white', drawerHideStatusBarOnOpen: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name='home' options={{ title: 'Inicio' }} component={Home} />
      <Drawer.Screen name='dates' options={{ title: 'Fechas' }} component={Dates} />
      <Drawer.Screen name='user' options={{ title: 'Usuario' }} component={User} />
    </Drawer.Navigator>
  );
}

function DrawerContent({ navigation, state }: DrawerContentComponentProps) {
  const { index } = state;
  return (
    <DrawerContentScrollView>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1474314170901-f351b68f544f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        }}
        style={{ width: '100%', height: 160, zIndex: 1, top: -30 }}
      />
      <View style={{ top: -110, zIndex: 2, left: 20 }}>
        <FirstLetterBox letter='A' />
      </View>
      <View style={{ top: -150, zIndex: 2, left: 95 }}>
        <Text style={{ color: 'white' }}>André Lizarán</Text>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>8vo semestre</Text>
      </View>
      <DrawerList navigation={navigation} index={index} />
    </DrawerContentScrollView>
  );
}

type DrawerListProps = {
  navigation: DrawerNavigationHelpers;
  index: number;
};

function DrawerList({ navigation, index }: DrawerListProps) {
  return (
    <View style={{ padding: 10, top: -120 }}>
      {routes.map(({ name, route }, indexMap) => (
        <DrawerItem
          name={name}
          route={route}
          active={indexMap === index}
          navigation={navigation}
        />
      ))}
    </View>
  );
}

type DrawerItemProps = {
  name: string;
  route: string;
  active: boolean;
  navigation: DrawerNavigationHelpers;
};

function DrawerItem({ name, active, navigation, route }: DrawerItemProps) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: active ? '#698c69' : normalGreen,
        borderRadius: 5,
        padding: 15,
        marginBottom: 10,
      }}
      onPress={() => navigation.navigate(route)}
    >
      <Text style={{ fontWeight: 'bold', color: 'white' }}>{name}</Text>
    </TouchableOpacity>
  );
}

const routes = [
  {
    id: 0,
    name: 'Inicio',
    route: 'home',
  },
  {
    id: 1,
    name: 'Eventos',
    route: 'dates',
  },
  {
    id: 2,
    name: 'Usuario',
    route: 'user',
  },
];
