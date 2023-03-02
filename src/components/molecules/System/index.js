import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {IcBack} from '../../../assets';
import {Button, Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

export default class System extends React.Component {
  constructor() {
    super();
    this.state = {
      update_id: 0,
      is_update: false,
      listOfItems: [],
      tempText: '',
    };
  }

  deleteItem(id) {
    const data = this.state.listOfItems;
    this.setState({
      listOfItems: data.filter(item => item.id !== id),
      is_update: false,
    });
  }
  addItem = () => {
    if (this.state.tempText != '') {
      const newItem = {
        id: 1 + Math.random(),
        value: this.state.tempText.slice(),
      };
      const data = this.state.listOfItems;
      data.push(newItem);
      this.setState({
        listOfItems: data,
        is_update: false,
      });
    }
  };
  editItem(id) {
    const data = this.state.listOfItems;
    const target = data.filter(item => item.id === id);
    // if (target.length > 0)
    this.setState({
      update_id: id,
      is_update: true,
      tempText: target[0].value.slice(),
    });
  }
  noUpdate() {
    this.setState({
      update_id: 0,
      is_update: false,
      tempText: '',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textView}>
          <View style={styles.back}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <IcBack />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.text}>System</Text>
          </View>
        </View>
        <Gap height={20} />
        <View>
          <View style={styles.InputContent}>
            <TextInput
              placeholder="  Type item here..."
              style={styles.inputBox}
              onChangeText={text => {
                if (this.state.is_update) {
                  const data = this.state.listOfItems;
                  const update_id = 0 + this.state.update_id;
                  const target = data.filter(item => item.id == update_id);
                  target[0].value = text;
                  this.setState({listOfItems: data});
                }
                this.setState({tempText: text});
              }}
              value={this.state.tempText}></TextInput>
          </View>
          <View style={styles.stybtn}>
            <Button text="Add" onPress={this.addItem} />
            <Gap height={10} />
            <Button text="OK" onPress={() => this.noUpdate()} />
          </View>

          <View>
            <ScrollView>
              {this.state.listOfItems.map(item => {
                return (
                  <View key={item.id} style={styles.listview}>
                    <TextInput style={styles.textstyle} value={item.value} />
                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => this.deleteItem(item.id)}>
                      <Text style={styles.deleteButtonText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.editButton}
                      onPress={() => this.editItem(item.id)}>
                      <Text style={styles.editButtonText}>Edit</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textView: {
    backgroundColor: 'white',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBox: {
    backgroundColor: 'white',
    textAlign: 'center',
    fontSize: 20,
    height: 60,
    width: 435,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
  },
  buttontext: {
    color: '#fff',
    fontSize: 24,
  },
  textstyle: {
    fontSize: 20,
    color: 'maroon',
  },
  listview: {
    borderWidth: 2,
    height: 60,
    justifyContent: 'space-between',
    borderColor: '#3A8EFC',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: '#3A8EFC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  deleteButtonText: {
    color: 'white',
  },
  editButton: {
    backgroundColor: '#3A8EFC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginEnd: 10,
  },
  editButtonText: {
    color: 'white',
  },
  text: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 180,
    marginTop: 20,
  },
  back: {
    marginLeft: 20,
    marginTop: 20,
  },
  InputContent: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  stybtn: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
});
