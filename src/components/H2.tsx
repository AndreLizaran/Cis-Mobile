import React from 'react';
import { Text } from 'react-native';

export default function H2({ text }: { text: string }) {
  return (
    <Text style={{ fontSize: 22, marginBottom: 20, fontWeight: '300' }}>{text}</Text>
  );
}
