// Modules
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Styles
import generalStyles from '../styles/general';

interface Props extends NativeStackScreenProps<any, any> {}

export default function NewUser({ navigation }: Props) {
  return (
    <View style={generalStyles.container}>
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
          Regístrate
        </Text>
      </View>
      <View
        style={{
          padding: 20,
          backgroundColor: '#DDDDDD',
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          marginBottom: 20,
        }}
      >
        {/* @ts-ignore */}
        <NewUserForm navigation={navigation} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginRight: 5,
          }}
        >
          ¿Tienes cuenta?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              color: '#1572A1',
            }}
          >
            Inicia sesión
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function NewUserForm({ navigation }: Props) {
  return (
    <>
      <Text style={generalStyles.generalLabel}>Nombre</Text>
      <TextInput style={generalStyles.generalTextInput} />
      <Text style={generalStyles.generalLabel}>Correo</Text>
      <TextInput style={generalStyles.generalTextInput} />
      <Text style={generalStyles.generalLabel}>Contraseña</Text>
      <TextInput style={generalStyles.generalTextInput} />
      <TouchableOpacity
        style={{
          paddingVertical: 15,
          paddingHorizontal: 20,
          backgroundColor: '#1572A1',
          borderRadius: 5,
          alignSelf: 'flex-start',
        }}
        onPress={() => navigation.navigate('private')}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          Regístrate
        </Text>
      </TouchableOpacity>
    </>
  );
}
