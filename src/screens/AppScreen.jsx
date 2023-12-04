// AppScreen.jsx

import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';

import Task from '../components/Task';
import appStyles from '../styles/appStyles';
import EditTaskScreen from '../screens/EditTaskScreen'; // Asegúrate de ajustar la ruta según tu estructura de carpetas.

export default function AppScreen(props) {
  const nombreUsuario = props.usuario;
  console.log("Nombre del usuario: " + nombreUsuario);
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = () => {
    Keyboard.dismiss();
    const newTask = { id: Date.now(), text: task };
    setTaskItems([...taskItems, newTask]);
    setTask('');
  };

  const completeTask = (id) => {
    let itemsCopy = [...taskItems];
    itemsCopy = itemsCopy.filter((item) => item.id !== id);
    setTaskItems(itemsCopy);
  };

  const editTask = (id) => {
    const editedTask = taskItems.find((item) => item.id === id);
    setEditingTask({ id, text: editedTask.text });
  };

  const saveEditedTask = (id, newText) => {
    const updatedTasks = taskItems.map((item) =>
      item.id === id ? { ...item, text: newText } : item
    );
    setTaskItems(updatedTasks);
    setEditingTask(null);
  };

  const cancelEditing = () => {
    setEditingTask(null);
  };

  return (
    <View style={appStyles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps='handled'
      >
        <View style={appStyles.tasksWrapper}>
          <Text style={appStyles.sectionTitle}>
            Today's {nombreUsuario}'s Tasks
          </Text>
          <View style={appStyles.items}>
            {taskItems.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => completeTask(item.id)}>
                <Task text={item.text} id={item.id} onEdit={editTask} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={appStyles.writeTaskWrapper}
      >
        <TextInput
          style={appStyles.input}
          placeholder={'Write a task'}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={appStyles.addWrapper}>
            <Text style={appStyles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {editingTask && (
        <EditTaskScreen
          task={editingTask}
          onSave={saveEditedTask}
          onCancel={cancelEditing}
        />
      )}
    </View>
  );
}
