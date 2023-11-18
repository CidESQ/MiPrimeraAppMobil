import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {layoutStyle} from '../styles/index'
import logo from "../../assets/miImagen.png"
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

export default function Auth() {

  const [showLogin, setshowLogin] = useState(false);
  
  return (
    <View style={layoutStyle.container}>
      <Image style={styles.logo} source={logo}/>
      {showLogin ? <LoginForm/> : <RegisterForm/>}
    </View>
  );
};

const styles = StyleSheet.create({
  logo:{
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20
  }
});