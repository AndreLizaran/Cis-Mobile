// Modules
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

// Screens
import User, { FirstLetterBox } from '../screens/User';
import Home from '../screens/Home';
import Dates from '../screens/Dates';
import PersonalEvents from '../screens/PersonalEvents';

// Colors
import { darkGray, normalGreen } from '../utils/colors';
import HeaderArticle from '../screens/HeaderArticle';
import Settings from '../screens/Settings';

export type DrawerStackParams = {
  Home: undefined;
  Dates: undefined;
  User: undefined;
  PersonalEvents: undefined;
  HeaderArticle: {
    id: string;
  };
};

const Drawer = createDrawerNavigator<DrawerStackParams>();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerTintColor: 'white', drawerHideStatusBarOnOpen: false }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name='Home' options={{ title: 'Inicio' }} component={Home} />
      <Drawer.Screen name='Dates' options={{ title: 'Eventos' }} component={Dates} />
      <Drawer.Screen name='User' options={{ title: 'Usuario' }} component={User} />
      <Drawer.Screen
        name='PersonalEvents'
        options={{ title: 'Eventos personales' }}
        component={PersonalEvents}
      />
      <Drawer.Screen
        name='HeaderArticle'
        options={{ title: 'Artículo' }}
        component={HeaderArticle}
      />
      <Drawer.Screen
        // @ts-ignore
        name='Settings'
        options={{ title: 'Configuraciones' }}
        component={Settings}
      />
    </Drawer.Navigator>
  );
}

function DrawerContent({ navigation, state }: DrawerContentComponentProps) {
  const { index } = state;
  return (
    <DrawerContentScrollView>
      <DrawerImage />
      <DrawerList navigation={navigation} index={index} />
      <DrawerSettingsButton navigation={navigation} />
    </DrawerContentScrollView>
  );
}

function DrawerImage() {
  return (
    <View>
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
    </View>
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
        backgroundColor: active ? '#383838' : darkGray,
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
    route: 'Home',
  },
  {
    id: 1,
    name: 'Eventos',
    route: 'Dates',
  },
  {
    id: 2,
    name: 'Usuario',
    route: 'User',
  },
  {
    id: 3,
    name: 'Eventos personales',
    route: 'PersonalEvents',
  },
];

type DrawerSettingsButtonProps = {
  navigation: DrawerNavigationHelpers;
};

function DrawerSettingsButton({ navigation }: DrawerSettingsButtonProps) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
      <Ionicons
        name='ios-settings'
        size={30}
        color='white'
        style={{ padding: 20, bottom: -60 }}
      />
    </TouchableOpacity>
  );
}
