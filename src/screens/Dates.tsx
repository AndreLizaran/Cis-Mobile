// Modules
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Styles
import generalStyles from '../styles/general';

export default function Dates() {
  return (
    <ScrollView style={generalStyles.container}>
      <DatesContainer
        headerColor='#DD4A48'
        title='Talleres'
        icon='pencil-sharp'
      />
      <DatesContainer
        headerColor='#1572A1'
        title='Conferencias'
        icon='megaphone'
      />
      <DatesContainer
        headerColor='#3E7C17'
        title='Cursos'
        icon='people-circle'
      />
    </ScrollView>
  );
}

type DatesContainerProps = {
  headerColor: string;
  title: string;
  icon: string;
};

function DatesContainer({ headerColor, title, icon }: DatesContainerProps) {
  return (
    <View style={{ width: '100%', marginBottom: 20, borderRadius: 5 }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          backgroundColor: headerColor,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
          {title}
        </Text>
        {/* @ts-ignore */}
        <Ionicons name={icon} size={24} color='white' />
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: '#DDDDDD',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
        }}
      >
        <NoDates color={headerColor} />
      </View>
    </View>
  );
}

type NoDatesProps = {
  color: string;
};

export function NoDates({ color }: NoDatesProps) {
  return (
    <View
      style={{
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: color,
      }}
    >
      <Text
        style={{ fontSize: 16, color, fontWeight: 'bold', textAlign: 'center' }}
      >
        No hay fechas próximas
      </Text>
    </View>
  );
}
