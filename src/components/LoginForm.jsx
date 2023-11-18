import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import { formStyles } from '../styles/index';
import colors from '../styles/colors';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function LoginForm({changeForm}) {
  const myFormik = useFormik({
    initialValues : initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: values => {console.log(values);}
  });

  function initialValues(){
    return{
      email: '',
      password: '',
    };
  };

  function validationSchema(){
    return{

      email: Yup.string().
        email('Invalid email').
        required('Required'),

      password: Yup.string()
        .required('Required'),
    };
  };

  return (
    <View>
      <TextInput 
        label='Email' 
        style={formStyles.input}
        textColor={colors.fontLight}
        activeUnderlineColor={colors.fontLight}
        onChangeText={(text) => myFormik.setFieldValue('email', text)}
        error={myFormik.errors.email}
      />
      <TextInput 
        label='Password' 
        style={formStyles.input} 
        textColor={colors.fontLight}
        activeUnderlineColor={colors.fontLight}
        onChangeText={(text) => myFormik.setFieldValue('password', text)}
        error={myFormik.errors.password}
        secureTextEntry
      />
      <Button 
        mode="contained" 
        onPress={myFormik.handleSubmit} 
        style={formStyles.primaryBtn}
        textColor={colors.fontLight}
        >Log in
      </Button>

      <Button 
        mode="text" 
        onPress={changeForm} 
        labelStyle={formStyles.secondaryBtn}
        >Sign in
      </Button>
    </View>
  )
}