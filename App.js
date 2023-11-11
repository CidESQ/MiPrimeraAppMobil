import {StyleSheet, View, Text } from 'react-native';
import {PaperProvider} from 'react-native-paper';
import Prueba from './src/components/Prueba';
import { useState } from 'react';
import Auth from './src/screens/auth';

export default function App() {
  const [auth, setAuth] = useState(undefined)
  return (
    <PaperProvider>
      <View style={styles.container}>
        {auth ? <Text>Zona De Usuario</Text> : <Auth/>}
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});