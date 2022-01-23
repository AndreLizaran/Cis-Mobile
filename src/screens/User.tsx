// Modules
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Colors
import { darkBlue, lightBlue } from '../utils/colors';

// Components
import { NoDates } from './Dates';

// Styles
import generalStyles from '../styles/general';

interface Props extends NativeStackScreenProps<any, any> {}

export default function User({ navigation }: Props) {
  return (
    <View style={generalStyles.container}>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
      >
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

function FirstLetterBox({ letter }: FirstLetterBoxProps) {
  return (
    <View
      style={{
        borderRadius: 5,
        backgroundColor: lightBlue,
        height: 80,
        width: 80,
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

function EventsContainer() {
  return (
    <View style={{ borderRadius: 5, marginBottom: 20 }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: '#191919',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          Eventos enlistados
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: '#DDDDDD',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <NoDates color='#191919' />
      </View>
    </View>
  );
}

function FooterButtons({ navigation }: Props) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          paddingHorizontal: 20,
          backgroundColor: '#DD4A48',
          borderRadius: 5,
        }}
        onPress={() => navigation.pop()}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
          Cerrar sesión
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          paddingHorizontal: 20,
          backgroundColor: '#1572A1',
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
          Cambiar usuario
        </Text>
      </TouchableOpacity>
    </View>
  );
}
