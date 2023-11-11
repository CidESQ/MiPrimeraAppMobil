import { View, Text } from 'react-native';
import {PaperProvider} from 'react-native-paper';
// import Prueba from './src/components/Prueba';
import { useState } from 'react';
import Auth from './src/screens/Auth';
// import { StyleSheet } from 'react-native';

export default function App() {
  const [auth, setAuth] = useState(false)
  return (
    <PaperProvider>

      {/* <View style={myStyle.container}>
        <Text>Aca si tengo estilos</Text>
      </View> */}

      <View>
        {auth ? <Text>Zona De Usuario</Text> : <Auth/>}
        <Text> Hola mundo desde android</Text>
      </View>
    </PaperProvider>
  )
};
// const myStyle = StyleSheet.create({
//   container: {
//     flex : 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'red',
//   }
// });