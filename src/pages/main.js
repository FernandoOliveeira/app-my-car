import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import Style from '../../styles/style';
import moment from 'moment';
import InputMask from '../components/input/index';


const style = Style;


function Main({ navigation }) {

    // Take user to maintenance screen
    function maintenanceScreen() {
        navigation.navigate('maintenance');
    }


    const [date, setDate] = useState("")
    const [currency, setCurrency] = useState("")


    /* Data Validation */
    function submit() {
        const data = moment(date.split('/').reverse().join('-'))
        console.log(data.isValid())
    }


    return (

        <SafeAreaView style={style.container}>
            <View style={style.container}>

                {/* Service name */}
                <TextInput
                    style={style.input}
                    placeholder='Ex.: Troca de óleo'

                />

                {/* Price */}
                <InputMask
                    value={currency}
                    mask="currency"
                    keyboardType='phone-pad'
                    placeholder='Essa brincadeira foi quanto?'
                    placeholderTextColor='gray'
                    inputMaskChange={(text) => setCurrency(text)}

                />


                {/* Date Input */}
                <InputMask
                    value={date}
                    mask="date"
                    maxLength={10} // 01/01/2021
                    keyboardType='phone-pad'
                    placeholder='01/01/2021'
                    placeholderTextColor='gray'
                    inputMaskChange={(text) => setDate(text)}


                />



                <TouchableOpacity
                    onPress={submit}
                    style={style.button}>
                    <Text style={style.buttonText}>Salvar</Text>
                </TouchableOpacity>

            </View >
        </SafeAreaView>
    )
}


export default Main;
