import { View, Text, StyleSheet } from 'react-native';
import {PaperProvider} from 'react-native-paper';
import { useState } from 'react';
import Auth from './src/screens/Auth';

export default function App() {
  const [auth, setAuth] = useState(false)
  return (
    <PaperProvider>
        {auth ? <Text>Zona De Usuario</Text> : <Auth/>}
    </PaperProvider>
  )
};
const myStyle = StyleSheet.create({
  container:{
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'red',
  }
});