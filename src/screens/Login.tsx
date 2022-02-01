// Modules
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Styles
import generalStyles from '../styles/general';

// Colors
import { darkGray, normalBlue } from '../utils/colors';

// Components
import SimpleButton from '../components/SimpleButton';

export interface Props extends NativeStackScreenProps<any, any> {}

export default function Login({ navigation }: Props) {
  return (
    <View style={generalStyles.container}>
      <View style={{ ...generalStyles.generalHeader, backgroundColor: darkGray }}>
        <Text style={generalStyles.generalHeaderTitle}>Inicio de sesión</Text>
      </View>
      <View style={{ ...generalStyles.generalBody, marginBottom: 20 }}>
        {/* @ts-ignore */}
        <LoginForm navigation={navigation} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginRight: 5,
          }}
        >
          ¿No tienes cuenta?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('new-user')}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textDecorationLine: 'underline',
              color: normalBlue,
            }}
          >
            Regístrate
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function LoginForm({ navigation }: Props) {
  return (
    <>
      <Text style={generalStyles.generalLabel}>Correo</Text>
      <TextInput style={generalStyles.generalTextInput} />
      <Text style={generalStyles.generalLabel}>Contraseña</Text>
      <TextInput style={generalStyles.generalTextInput} />
      <TouchableOpacity
        onPress={() => navigation.navigate('private')}
        style={{ alignSelf: 'flex-start' }}
      >
        <SimpleButton bgColor={normalBlue} text='Iniciar sesión' />
      </TouchableOpacity>
    </>
  );
}
