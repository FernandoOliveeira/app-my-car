import React, { useState } from 'react';
import { View, Text, TextInput, ToastAndroid, TouchableOpacity, SafeAreaView } from 'react-native';
import style from '../../../styles/style';
import { dateValid } from '../../validations/validation'
import InputMask from '../../components/input/index';


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

        if (!dateValid(date)) {
            errorMessage.push("Data inválida");
        }
        const dateDb = date.split('/').reverse().join('-');
        const serviceDb = service;
        const currencyDb = currency;
        console.log({
            dateDb,
            serviceDb,
            currencyDb
        });


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
