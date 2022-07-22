// In App.js in a new project

import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FullPage from './components/Layouts/FullPage';
import AppText from './components/Typography/AppText';
import {FloatingAction} from 'react-native-floating-action';
import {btn_txt} from './data/constants';
import DynamicIcon from './components/Common/DynamicIcon';
import NoteList from './screens/NoteList';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NoteList"
          component={NoteList}
          options={{headerShown: false}}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
