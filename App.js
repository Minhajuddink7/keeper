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

function HomeScreen({navigation}) {
  const actions = [
    {
      text: 'New Note',
      // icon: require('./images/ic_accessibility_white.png'),
      name: btn_txt.ADD,
    },
    {
      text: 'Note List',
      // icon: require('./images/ic_language_white.png'),
      name: btn_txt.LIST,
    },
  ];
  const [currentNote, setCurrentNote] = useState('');
  return (
    <FullPage>
      {/* <TouchableOpacity onPress={() => navigation.navigate('First')}>
        <AppText text="Home" />
      </TouchableOpacity> */}
      <TextInput
        style={{
          color: '#fff',
          fontSize: 24,
          fontFamily: 'Montserrat-Bold',
          textAlign: 'center',
          textDecorationLine: 'underline',
          backgroundColor: '#223',
        }}
        placeholder="Note title"
      />
      <ScrollView style={{backgroundColor: '#334', padding: 5}}>
        <TextInput
          multiline={true}
          style={{
            color: '#fff',
            fontSize: 22,
            fontFamily: 'Montserrat-Medium',
          }}
          autoFocus={true}
          value={currentNote}
          onChangeText={text => setCurrentNote(text)}
        />
      </ScrollView>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          if (name === btn_txt.ADD) {
            setCurrentNote('');
          } else if (name === btn_txt.LIST) {
            navigation.navigate('First');
          }
        }}
      />
    </FullPage>
  );
}
function First() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>First Screen</Text>
    </View>
  );
}

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
          name="First"
          component={First}
          // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
