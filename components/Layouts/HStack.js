import {StyleSheet, View} from 'react-native';
import React from 'react';

const HStack = ({
  alignItems,
  justifyContent,
  mt,
  mr,
  ml,
  mb,
  mx,
  my,
  children,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent,
        alignItems,
        marginTop: mt,
        marginRight: mr,
        marginLeft: ml,
        marginBottom: mb,
        marginHorizontal: mx,
        marginVertical: my,
      }}>
      {children}
    </View>
  );
};

export default HStack;

const styles = StyleSheet.create({});
