// Modules
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';

// Colors
import {
  darkBlue,
  darkGray,
  lightBlue,
  normalBlue,
  normalRed,
} from '../utils/colors';

// Components
import { NoDates } from './Dates';

// Styles
import generalStyles from '../styles/general';
import SimpleButton from '../components/SimpleButton';

interface Props extends NativeStackScreenProps<any, any> {}

export default function User({ navigation }: Props) {
  return (
    <View style={generalStyles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <FirstLetterBox letter='A' />
        <UserInformation />
      </View>
      <EventsContainer />
      {/* @ts-ignore */}
      <FooterButtons navigation={navigation} />
    </View>
  );
}

type FirstLetterBoxProps = {
  letter: string;
};

export function FirstLetterBox({ letter }: FirstLetterBoxProps) {
  return (
    <View
      style={{
        borderRadius: 5,
        backgroundColor: lightBlue,
        height: 60,
        width: 60,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
      }}
    >
      <Text style={{ color: darkBlue, fontWeight: 'bold', fontSize: 24 }}>
        {letter}
      </Text>
    </View>
  );
}

function UserInformation() {
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 2 }}>
        André Lizarán
      </Text>
      <Text style={{ fontSize: 14 }}>andrelizaran2000@gmail.com</Text>
      <Text style={{ fontSize: 14, color: darkBlue, fontWeight: 'bold' }}>
        8vo semestre
      </Text>
    </View>
  );
}

export function EventsContainer() {
  return (
    <View style={{ borderRadius: 5, marginBottom: 20 }}>
      <View
        style={{
          ...generalStyles.generalHeader,
          backgroundColor: darkGray,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          Eventos personales
        </Text>
        <FontAwesome5 name='calendar-alt' size={24} color='white' />
      </View>
      <View style={generalStyles.generalBody}>
        <NoDates color={darkGray} />
      </View>
    </View>
  );
}

function FooterButtons({ navigation }: Props) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => navigation.pop()} style={{ marginRight: 20 }}>
        <SimpleButton bgColor={normalRed} text='Cerrar sesión' />
      </TouchableOpacity>
      <TouchableOpacity>
        <SimpleButton bgColor={normalBlue} text='Cambiar usuario' />
      </TouchableOpacity>
    </View>
  );
}
