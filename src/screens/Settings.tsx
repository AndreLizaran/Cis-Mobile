// Modules
import React from 'react';
import { FlatList, Switch, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Colors
import {
  green200,
  lightGray,
  normalBlue,
  normalGray,
  normalRed,
  orange200,
} from '../utils/colors';

// Styles
import generalStyles from '../styles/general';

export default function Settings() {
  return (
    <View style={generalStyles.container}>
      <View
        style={{ paddingVertical: 0, borderRadius: 5, backgroundColor: lightGray }}
      >
        <FlatList
          data={options}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <FlatListItemSettings item={item} last={index === options.length - 1} />
          )}
        />
      </View>
    </View>
  );
}

type ItemType = {
  id: number;
  title: string;
  icon: string;
  color: string;
};

type FlatListItemSettingsProps = {
  item: ItemType;
  last: boolean;
};

function FlatListItemSettings({ item, last }: FlatListItemSettingsProps) {
  //
  const { icon, color, title } = item;

  return (
    <View
      style={{
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: !last ? 1 : 0,
        borderBottomColor: 'white',
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ padding: 8, borderRadius: 5, backgroundColor: color }}>
          {/* @ts-ignore */}
          <Ionicons name={icon} size={20} color='white' />
        </View>
        <Text style={{ fontSize: 16, marginLeft: 15 }}>{title}</Text>
      </View>
      <Switch value={false} onValueChange={() => console.log('Cambiando')} />
    </View>
  );
}

const options = [
  {
    id: 1,
    title: 'Modo oscuro',
    icon: 'moon',
    color: normalBlue,
  },
  {
    id: 2,
    title: 'Notificaciones visibles',
    icon: 'notifications',
    color: orange200,
  },
  {
    id: 3,
    title: 'Ahorrar de energía',
    icon: 'battery-full-sharp',
    color: green200,
  },
  {
    id: 4,
    title: 'Recordar usuario',
    icon: 'person',
    color: normalRed,
  },
];
