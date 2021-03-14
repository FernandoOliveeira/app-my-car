import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import logo from '../../../assets/car.png';
import style, { Container } from './style';
import InputMask from '../../components/inputMask/index';
import { dateValid } from '../../validations/dateValidation';
import { toast } from '../../utils/toast';


export default function Main() {

    // Hooks
    const [serviceInput, setService] = useState("")
    const [dateInput, setDate] = useState("")
    const [currencyInput, setCurrency] = useState("")

    // Save data in the database
    async function saveMaintenance(repository) {


    }

    // Submit 
    async function submit() {
        console.log({ serviceInput, dateInput, currencyInput })
    }

    return (

        <Container>

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
                    maxLength={50}
                    placeholder='Serviço realizado:'
                    placeholderTextColor='gray'
                    value={serviceInput}
                    onChangeText={(text) => setService(text)}

                />
            </View>

            {/* Price */}
            <View style={style.inputView}>
                <Ionicons name={'logo-usd'} size={25} color={'white'} style={style.inputIcon} />
                <InputMask
                    style={style.input}
                    value={currencyInput}
                    mask="currency"
                    maxLength={10}
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
                    value={dateInput}
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

        </Container>
    )
}

