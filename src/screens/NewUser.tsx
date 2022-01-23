// Modules
import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Styles
import generalStyles from '../styles/general';

// Colors
import { darkGray, normalBlue, normalGray } from '../utils/colors';

// Components
import SimpleButton from '../components/SimpleButton';

interface Props extends NativeStackScreenProps<any, any> {}

export default function NewUser({ navigation }: Props) {
  return (
    <View style={generalStyles.container}>
      <View
        style={{ ...generalStyles.generalHeader, backgroundColor: darkGray }}
      >
        <Text style={generalStyles.generalHeaderTitle}>Regístrate</Text>
      </View>
      <View style={{ ...generalStyles.generalBody, marginBottom: 20 }}>
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
              color: normalBlue,
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
        onPress={() => navigation.navigate('private')}
        style={{ alignSelf: 'flex-start' }}
      >
        <SimpleButton bgColor={normalBlue} text='Regístrate' />
      </TouchableOpacity>
    </>
  );
}
