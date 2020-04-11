import React from 'react';
import { Text } from "react-native";
import ProgressCircle from 'react-native-progress-circle';

const clock = props => {

  return (
    <ProgressCircle
        percent={props.percent}
        radius={50}
        borderWidth={8}
        color="#3399FF"
        shadowColor="#999"
        bgColor="#fff"
    >
        <Text style={{ fontSize: 18 }}>{props.time}</Text>
    </ProgressCircle>
  )
}

export default clock;