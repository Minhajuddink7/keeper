import {Text} from 'react-native';
import React from 'react';

const AppText = ({text, type, mr, ml}) => {
  //props: text, type:"fontfamily,color,fontSize"

  const styleArr = type?.split(/[,]/);
  let textStyle = {
    fontFamily: styleArr?.[0] || 'Inter-Regular',
    color: styleArr?.[1] || '#111',
    fontSize: styleArr?.[2] ? JSON.parse(styleArr[2]) : 14,
    marginLeft: ml || 0,
    marginRight: mr || 0,
  };

  return <Text style={textStyle}>{text}</Text>;
};

export default AppText;
