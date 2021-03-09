import React, { useState } from 'react';
import { View, Text, TextInput, ToastAndroid, TouchableOpacity, SafeAreaView } from 'react-native';
import Style from '../../styles/style';
import moment from 'moment';
import InputMask from '../components/input/index';


const style = Style;


function Main({ navigation }) {

    const toast = (message) => {
        ToastAndroid.showWithGravityAndOffset(
            message,
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    };

    // Take user to maintenance screen
    function maintenanceScreen() {
        navigation.navigate('maintenance');
    }

    // Input variables
    const [service, setService] = useState("")
    const [date, setDate] = useState("")
    const [currency, setCurrency] = useState("")


    // Submit
    function submit() {
        const errorMessage = []

        /* Data Validation */
        const dateValid = moment(date.split('/').reverse().join('-'))

        // Verify if some of then are empty
        if ([dateValid, service.trim(), currency.trim()].includes("")) {
            errorMessage.push("Todos os campos devem ser preenchidos")
        }

        errorMessage.forEach(value => toast(value))

    }


    return (

        <SafeAreaView style={style.container}>
            <View style={style.container}>

                {/* Service name */}
                <TextInput
                    style={style.input}
                    placeholder='Ex.: Troca de óleo'
                    value={service}
                    onChangeText={(text) => setService(text)}

                />

                {/* Price */}
                <InputMask
                    style={style.input}
                    value={currency}
                    mask="currency"
                    keyboardType='phone-pad'
                    placeholder='Essa brincadeira foi quanto?'
                    placeholderTextColor='gray'
                    inputMaskChange={(text) => setCurrency(text)}

                />


                {/* Date Input */}
                <InputMask
                    style={style.input}
                    value={date}
                    mask="date"
                    maxLength={10} // 01/01/2021
                    keyboardType='phone-pad'
                    placeholder='01/01/2021'
                    placeholderTextColor='gray'
                    inputMaskChange={(text) => setDate(text)}

                />

                {/* Button */}
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
