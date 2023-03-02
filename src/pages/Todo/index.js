import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDo = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    getTaskList();
  }, []);

  const getTaskList = async () => {
    try {
      const value = await AsyncStorage.getItem('@taskList');
      if (value !== null) {
        setTaskList(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const saveTaskList = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@taskList', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const handleTask = () => {
    if (task !== '') {
      const taskItem = {
        id: Math.random().toString(),
        value: task,
      };

      setTaskList([...taskList, taskItem]);
      saveTaskList([...taskList, taskItem]);
      setTask('');
    }
  };

  const deleteTask = id => {
    const filteredTaskList = taskList.filter(taskItem => taskItem.id !== id);
    setTaskList(filteredTaskList);
    saveTaskList(filteredTaskList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ToDo List</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter task here..."
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskList}>
        {taskList.map(taskItem => (
          <TouchableOpacity
            key={taskItem.id}
            style={styles.taskItem}
            onPress={() => deleteTask(taskItem.id)}>
            <Text style={styles.taskText}>{taskItem.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    flex: 1,
    marginRight: 20,
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskList: {
    marginTop: 20,
  },
  taskItem: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
  },
});
