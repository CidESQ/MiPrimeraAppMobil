import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { loginApi } from '../API/user';
import { formStyles } from '../styles/index';
import colors from '../styles/colors';
import useAuth from '../hooks/useAuth';

export default function LoginForm({changeForm}) {
  const {login} = useAuth();
  console.log(login);

  const myFormik = useFormik({
    initialValues : initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async values => {
      console.log(values);
      try{
        const response = await loginApi(values);
        // console.log("OK: " + response);
        login(response);
      }catch(error){
        console.log('Algo anda mal' + error);
      }
    }
  });

  function initialValues(){
    return{
      identifier: '',
      password: '',
    };
  };

  function validationSchema(){
    return{

      identifier: Yup.string().
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
        onChangeText={(text) => myFormik.setFieldValue('identifier', text)}
        error={myFormik.errors.identifier}
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
        >Sign up
      </Button>
    </View>
  )
}