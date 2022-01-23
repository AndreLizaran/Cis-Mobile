import React from 'react';
import { Text, View } from 'react-native';

type Props = {
  bgColor: string;
  text: string;
};
export default function SimpleButton({ bgColor, text }: Props) {
  return (
    <View
      style={{
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: bgColor,
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        {text}
      </Text>
    </View>
  );
}
