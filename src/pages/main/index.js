import React, { useState } from 'react';
import { View, Text, TextInput, ToastAndroid, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import logo from '../../../assets/car.png';
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

        <View style={style.container}>

            {/* Logo Image */}
            <View style={style.Logo}>
                <Image
                    style={style.image}
                    source={logo}
                />
            </View>

            {/* Service name */}
            <View style={style.inputView}>
                <Ionicons name={'build-outline'} size={25} color={'white'} style={style.inputIcon} />
                <TextInput
                    style={style.input}
                    placeholder='Serviço realizado:'
                    placeholderTextColor='gray'
                    value={service}
                    onChangeText={(text) => setService(text)}

                />
            </View>

            {/* Price */}
            <View style={style.inputView}>
                <Ionicons name={'logo-usd'} size={25} color={'white'} style={style.inputIcon} />
                <InputMask
                    style={style.input}
                    value={currency}
                    mask="currency"
                    keyboardType='phone-pad'
                    placeholder='Preço:'
                    placeholderTextColor='gray'
                    inputMaskChange={(text) => setCurrency(text)}

                />
            </View>

            {/* Date Input */}
            <View style={style.inputView}>
                <Ionicons name={'calendar-outline'} size={25} color={'white'} style={style.inputIcon} />
                <InputMask
                    style={style.input}
                    value={date}
                    mask="date"
                    maxLength={10} // 01/01/2021
                    keyboardType='phone-pad'
                    placeholder='Data: dia/mês/ano'
                    placeholderTextColor='gray'
                    inputMaskChange={(text) => setDate(text)}

                />
            </View>
            {/* Button */}
            <TouchableOpacity
                onPress={submit}
                style={style.button}>
                <Text style={style.buttonText}>Salvar</Text>
            </TouchableOpacity>

        </View >
    )
}


export default Main;
