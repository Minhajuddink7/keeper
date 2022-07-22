import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import DynamicIcon from '../components/Common/DynamicIcon';
import {btn_txt} from '../data/constants';
import FullPage from '../components/Layouts/FullPage';
import {FloatingAction} from 'react-native-floating-action';

const HomeScreen = ({navigation}) => {
  const actions = [
    {
      text: 'Create New',
      color: 'green',
      textBackground: 'green',
      textColor: '#fff',
      icon: <DynamicIcon family="AntDesign" name="plus" size={18} />,
      // icon: require('./images/ic_accessibility_white.png'),
      name: btn_txt.ADD,
    },
    {
      text: 'Note List',
      color: 'orange',
      textBackground: 'orange',
      textColor: '#fff',
      icon: <DynamicIcon family="Feather" name="list" size={18} />,
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
          fontSize: 22,
          fontFamily: 'Montserrat-SemiBold',
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
            fontSize: 18,
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
            navigation.navigate('NoteList');
          }
        }}
      />
    </FullPage>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
