import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Home,
  Search,
  Map,
  Ticket,
} from '../pages';

import {BottomNavigator} from '../components';
import System from '../components/molecules/System';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Map" component={Map} options={{headerShown: false}} />
      <Tab.Screen
        name="Ticket"
        component={Ticket}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="System"
        component={System}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
