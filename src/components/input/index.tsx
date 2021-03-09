import React from 'react';
import { TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import style from '../../../styles/style';
import { maskDate, maskCurrency } from '../../utils/masks';


interface InputProps extends TextInputProps {
  mask: "date" | "currency",
  inputMaskChange: any
}


const InputMask: React.FC<InputProps> = ({ mask, inputMaskChange, ...rest }) => {

  function handleChange(text: string) {

    let value: any = "";
    switch (mask) {

      case "date":
        value = maskDate(text);
        inputMaskChange(value)
        break;

      case "currency":
        value = maskCurrency(text);
        inputMaskChange(value)
        break;
    }


  }



  return (
    <>

      <TextInput
        style={style.input}
        onChangeText={(text) => handleChange(text)}
        {...rest}
      />

    </>
  );


};


export default InputMask;
