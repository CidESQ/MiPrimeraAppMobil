import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import { formStyles } from '../styles/index'
import colors from '../styles/colors'

export default function LoginForm({changeForm}) {
  return (
    <View>
      <TextInput 
        label='Email' 
        style={formStyles.input}
        textColor={colors.fontLight}
        activeUnderlineColor={colors.fontLight}
      />
      <TextInput 
        label='Password' 
        style={formStyles.input} 
        textColor={colors.fontLight}
        activeUnderlineColor={colors.fontLight}
        secureTextEntry
      />
      <Button 
        mode="contained" 
        onPress={() => console.log('Pressed')} 
        style={formStyles.primaryBtn}
        textColor={colors.fontLight}
      >
        Log in
      </Button>

      <Button 
        mode="text" 
        onPress={changeForm} 
        labelStyle={formStyles.secondaryBtn}
      >
        Sign in
      </Button>
    </View>
  )
}