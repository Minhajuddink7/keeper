import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FullPage from '../components/Layouts/FullPage';
import HStack from '../components/Layouts/HStack';
import DynamicIcon from '../components/Common/DynamicIcon';
// import HStack from '../components/Layouts/Hstack';

const NoteList = () => {
  return (
    <FullPage>
      <View style={{alignItems: 'center', backgroundColor: '#334'}}>
        <View
          style={{
            width: 160,
            height: 42,
            backgroundColor: '#eef',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontFamily: 'Montserrat-SemiBold',
            }}>
            Your Notes
          </Text>
        </View>
      </View>
      <ScrollView style={{backgroundColor: '#334', paddingVertical: 15}}>
        <View style={styles.noteCard}>
          <HStack justifyContent="space-between">
            <View
              style={{
                height: 40,
                borderRadius: 8,
                flex: 6,
                // width: ,
                backgroundColor: '#120E43',
              }}></View>
            <TouchableOpacity style={styles.actionButton}>
              <DynamicIcon
                family="FontAwesome5"
                name="pen"
                size={16}
                color="#fff"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.actionButton,
                backgroundColor: '#D40000',
              }}>
              <DynamicIcon
                family="FontAwesome5"
                name="trash"
                size={16}
                color="#fff"
              />
            </TouchableOpacity>
          </HStack>
        </View>
      </ScrollView>
    </FullPage>
  );
};

export default NoteList;

const styles = StyleSheet.create({
  noteCard: {
    marginHorizontal: '6%',
    padding: 10,
    backgroundColor: '#eef',
    height: 120,
    borderRadius: 8,
  },
  actionButton: {
    flex: 1,
    marginLeft: 10,
    height: 40,
    backgroundColor: '#120E43',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
