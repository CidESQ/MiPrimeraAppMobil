import { Text, View } from 'react-native';
import React from 'react';
import { Button, TextInput } from 'react-native-paper';
import {formStyles} from '../styles/index';
import colors from '../styles/colors';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import registerApi from '../API/user';

export default function RegisterForm({changeForm}) {
  const formikVar = useFormik({
    initialValues : initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async values => {
      // console.log(values);
      try{
        await registerApi(values);
        console.log('Ok');
      }catch(error){
        console.log(values);
        console.log(`${error} Algo anda mal`);
      }
    },  
  });

  function initialValues(){
    return {
      username: '',
      email: '',
      password: '',
      repeatPassword: ''
    };
  };

  function validationSchema(){
    return{
      username: Yup.string()
        .min(2, 'Too Short!')
        .max(20, 'Too Long!')
        .required('Required'),

      email: Yup.string().email('Invalid email').required('Required'),

      password: Yup.string()
        .required('Required'),
      
      password: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password')], true)
    }
  };

  return (
    <View>
      <TextInput
        label='User' 
        style={formStyles.input} 
        textColor={colors.fontLight}
        activeUnderlineColor={colors.fontLight}
        onChangeText={(text) => formikVar.setFieldValue('username',text)}
        error={formikVar.errors.username}
       />
      <TextInput 
        label='Email' 
        style={formStyles.input}
        textColor={colors.fontLight}
        activeUnderlineColor={colors.fontLight}
        onChangeText={(text) => formikVar.setFieldValue('email',text)}
        error={formikVar.errors.email}
      />
      <TextInput 
        label='Password' 
        style={formStyles.input} 
        textColor={colors.fontLight}
        activeUnderlineColor={colors.fontLight}
        onChangeText={(text) => formikVar.setFieldValue('password',text)}
        error={formikVar.errors.password}
        secureTextEntry
      />
      <TextInput 
        label='Repeat password' 
        style={formStyles.input} 
        textColor={colors.fontLight}
        activeUnderlineColor={colors.fontLight}
        onChangeText={(text) => formikVar.setFieldValue('repeatPassword',text)}
        error={formikVar.errors.repeatPassword}
        secureTextEntry
      />
      
      <Button 
        mode="contained" 
        onPress={formikVar.handleSubmit} 
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
