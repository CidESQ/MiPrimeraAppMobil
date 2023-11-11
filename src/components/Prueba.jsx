import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Prueba() {
  return (
    <View>
        <Text>Prueba</Text>
        <Button 
            icon="camera"
            mode="contained" 
            // onPress={() => console.log('Pressed')}
            onPress={() => Alert.alert("pressed")}
        >
        Press me
        </Button>
    </View>
  )
}

const styles = StyleSheet.create({})