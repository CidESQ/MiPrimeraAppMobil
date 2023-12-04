import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import React, { useState } from 'react';

import Task from '../components/Task';
import appStyles from '../styles/appStyles';

export default function AppScreen(props) {
  const nombreUsuario = props.usuario;
  console.log("Nombre del usuario: " + nombreUsuario);
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={appStyles.container}>

    <ScrollView
      contentContainerStyle={{
        flexGrow: 1
      }}
      keyboardShouldPersistTaps='handled'
    >

      {/* Mostrar las tareas */}
      <View style={appStyles.tasksWrapper}>
        <Text style={appStyles.sectionTitle}>
          Today's {nombreUsuario}'s Tasks
        </Text>
        <View style={appStyles.items}>
          {
            taskItems.map((item, index) => {
              return(
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}/>
                </TouchableOpacity>
              );
            })
          }
        </View>
      </View>
    </ScrollView>

    {/* Escribir una nueva tarea*/}
    <KeyboardAvoidingView
     behavior={Platform.OS === "ios" ? "padding" : "height" }
     style={appStyles.writeTaskWrapper}>

      <TextInput style={appStyles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>

      <TouchableOpacity onPress={() => handleAddTask()} >
        <View style={appStyles.addWrapper}>
          <Text style={appStyles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  </View>
  );
}