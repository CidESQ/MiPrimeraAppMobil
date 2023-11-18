import { Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'
import {formStyles} from '../styles/index';

export default function RegisterForm() {
  return (
    <View>
      <TextInput label='User' style={formStyles.input}/>
      <TextInput label='Email' style={formStyles.input}/>
      <TextInput 
        label='Password' 
        style={formStyles.input} 
        secureTextEntry
      />
      <TextInput label='Repeat password' style={formStyles.input}/>
    </View>
  )
}
