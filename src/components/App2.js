import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
      <View style={{flex: 2, backgroundColor: 'orange'}}>
        <Text>Esta es la primera version de SecondLife 1</Text>
        <Button   
          title="Log in"
          color="#841584"
          accessibilityLabel="Learn more about this purple button" 
          onPress={save}/>
      </View>
      <View style={{flex: 2, backgroundColor: 'red'}}>
        <Text>Esta es la primera version de SecondLife 2</Text>
      </View>
      <View style={{flex: 3, backgroundColor: 'papayawhip'}}>
        <Text>Esta es la primera version de SecondLife 3 </Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'pink'}}>
        <Text>Esta es la primera version de SecondLife 4</Text>
      </View>
    </View>
  );
}

const save = () => {
Alert.alert('Me presioanste')
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flexDirection: 'row',   
  },
});
