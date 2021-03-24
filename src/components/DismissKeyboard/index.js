import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

// Makes the function Keyboard.dismiss() available by clicking anywhere in the screen
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

export { DismissKeyboard }