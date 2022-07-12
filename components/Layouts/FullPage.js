import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';

const FullPage = ({children}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff'}} flex={1}>
      {children}
    </SafeAreaView>
  );
};

export default FullPage;
