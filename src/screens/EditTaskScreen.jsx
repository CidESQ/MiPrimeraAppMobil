// EditTaskScreen.jsx
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../styles/colors';

const EditTaskScreen = ({ task, onSave, onCancel }) => {
  const [editedTask, setEditedTask] = useState(task.text);

  const handleSave = () => {
    onSave(task.id, editedTask);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Task</Text>
      <TextInput
        style={styles.input}
        value={editedTask}
        onChangeText={setEditedTask}
        placeholder="Edit your task here"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 50,
      marginBottom: 30,
      position: 'relative'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: colors.primary,
      borderRadius: 50,
      borderWidth: 1,
      marginBottom: 20,
      padding: 10,
      width: '100%',
    },
    saveButton: {
      backgroundColor: colors.lightDark,
      padding: 10,
      borderRadius: 5,
      width: '50%',
      alignItems: 'center',
      marginBottom: 10,
    },
    cancelButton: {
      backgroundColor: colors.lightDark,
      padding: 10,
      borderRadius: 5,
      width: '50%',
      alignItems: 'center',
    },
    buttonText: {
      color: colors.fontLight,
      fontWeight: 'bold',
    },
  });

export default EditTaskScreen;
