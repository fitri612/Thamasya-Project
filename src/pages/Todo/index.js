import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IcBack2} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const ToDo = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const navigation = useNavigation();

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
        id: editTaskId !== null ? editTaskId : Math.random().toString(),
        value: task,
      };

      const newTaskList =
        editTaskId !== null
          ? taskList.map(item => (item.id === editTaskId ? taskItem : item))
          : [...taskList, taskItem];

      setTaskList(newTaskList);
      saveTaskList(newTaskList);
      setTask('');
      setEditTaskId(null);
    }
  };

  const deleteTask = id => {
    const filteredTaskList = taskList.filter(taskItem => taskItem.id !== id);
    setTaskList(filteredTaskList);
    saveTaskList(filteredTaskList);
  };

  const editTask = id => {
    const taskItem = taskList.find(item => item.id === id);

    setTask(taskItem.value);
    setEditTaskId(id);
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.back}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IcBack2 />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>New Task</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter task here..."
            value={task}
            onChangeText={text => setTask(text)}
          />
          <TouchableOpacity style={styles.addButton} onPress={handleTask}>
            <Text style={styles.addButtonText}>Create</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskList}>
          {taskList.map(taskItem => (
            <View key={taskItem.id} style={styles.taskItem}>
              <Text style={styles.taskText}>{taskItem.value}</Text>
              <View style={styles.taskItemActions}>
                <TouchableOpacity
                  style={styles.editButton}
                  onPress={() => editTask(taskItem.id)}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteTask(taskItem.id)}>
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  back: {
    marginLeft: 20,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    marginHorizontal: 20,
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
    justifyContent: 'center',
  },
  taskText: {
    fontSize: 16,
    marginTop: 4,
  },
  editButton: {
    backgroundColor: '#ffc107',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#dc3545',
    padding: 8,
    borderRadius: 4,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  taskItemActions: {
    flexDirection: 'row',
    marginTop: 4,
    justifyContent: 'flex-end',
  },
});
