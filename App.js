import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Style from './styles/style';
import Main from './views/main';


const style = Style;

export default function App() {
  return (
    <View style={style.container}>

      <Main />

      <StatusBar style="auto" />
    </View>
  );
}


