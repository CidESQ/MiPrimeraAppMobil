import { Text, View } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import {formStyles} from '../styles/index';
import colors from '../styles/colors';

export default function RegisterForm({changeForm}) {
  return (
    <View>
      <TextInput
        label='User' 
        style={formStyles.input} 
        textColor={colors.fontLight}
        activeUnderlineColor={colors.fontLight}
       />
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
      <TextInput 
        label='Repeat password' 
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
        Register
      </Button>

      <Button 
        mode="text" 
        onPress={changeForm} 
        labelStyle={formStyles.secondaryBtn}
      >
        Log in
      </Button>
    </View>
  );
};
