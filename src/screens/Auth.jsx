import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {layoutStyle} from '../styles/index'
import logo from "../../assets/miImagen.png"
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

export default function Auth() {
  const [showLogin, setshowLogin] = useState(false);
  return (
    <View style={StyleSheet.create({
      // flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: 'papayawhip',
    })}>
      {showLogin ? <LoginForm/> : <RegisterForm/>}
      <Text>Autenticate</Text>
    </View>
    // <View style={layoutStyle.container}>
    //   <Image style={styles.logo} source={logo}/>
    //   {showLogin ? <LoginForm/> : <RegisterForm/>}
    //   <Text>Authentication</Text>
    // </View>
  )
};

// const styles = StyleSheet.create({
//   logo:{
//     width: '100%',
//     height: '50px',
//     // resizeMode: 'container',
//     marginBottom: '20px'
//   }
// });
