import { Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

export default function RegisterForm() {
  return (
    <View>
      <Text>RegisterForm</Text>
      <TextInput label='Email'/>
      <TextInput label='Password'/>
      <TextInput label='Repeat password'/>
    </View>
  )
}
