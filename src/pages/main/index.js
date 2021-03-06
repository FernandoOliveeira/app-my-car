import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, Keyboard } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { v1 as uuid } from 'react-native-uuid';

import logo from '../../../assets/car.png';
import style, { Container, InputViewService, InputViewPrice, InputViewDate } from './style';
import InputMask from '../../components/inputMask/index';
import { DismissKeyboard } from '../../components/dismissKeyboard';
import { dateValid } from '../../validations/dateValidation';
import { toast } from '../../utils/toast';


export default function Main() {

    // Hooks
    const [serviceInput, setService] = useState("")
    const [dateInput, setDate] = useState("")
    const [priceInput, setCurrency] = useState("")

    const [focusService, setFocusService] = useState(false);
    const [focusPrice, setFocusPrice] = useState(false);
    const [focusDate, setFocusDate] = useState(false);

    const [errorService, setErrorService] = useState(false);
    const [errorPrice, setErrorPrice] = useState(false);
    const [errorDate, setErrorDate] = useState(false);


    // Submit Function
    async function submit() {

        try {

            if (!serviceInput.trim()) {
                setErrorService(true);
            }
            if (!priceInput.trim()) {
                setErrorPrice(true);
            }
            if (!dateInput.trim()) {
                setErrorDate(true);
            }


            if ([serviceInput.trim(), priceInput.trim(), dateInput.trim()].includes("")) {

                toast('Todos os campos devem ser preenchidos');

            }
            else {
                // Saves data in AsyncStorage as a JSON
                const values = { serviceInput, priceInput, dateInput };
                const jsonValue = JSON.stringify(values);
                await AsyncStorage.setItem(uuid(), jsonValue);

                toast('Dados salvos com sucesso');

                // Clear all inputs and hide keyboard
                setService("");
                setDate("");
                setCurrency("");

                setErrorService(false);
                setErrorPrice(false);
                setErrorDate(false);

                Keyboard.dismiss();
            }



        } catch (err) {
            Alert(err)

        }
    }

    return (

        <DismissKeyboard>
            <Container>

                {/* Logo Image */}
                <View style={style.Logo}>
                    <Image
                        style={style.image}
                        source={logo}
                    />
                </View>

                {/* Service name */}
                <InputViewService
                    focus={focusService}
                    onFocus={() => setFocusService(true)}
                    onBlur={() => setFocusService(false)}
                >
                    <Ionicons name={'build-outline'} size={25} color={errorService ? 'tomato' : 'white'} style={style.inputIcon} />
                    <TextInput
                        style={style.input}
                        type="text"
                        error={errorService}
                        maxLength={100}
                        placeholder='Servi??o realizado:'
                        placeholderTextColor={errorService ? 'tomato' : 'gray'}
                        value={serviceInput}
                        onChangeText={(text) => setService(text)}

                    />
                </InputViewService>

                {/* Price */}
                <InputViewPrice
                    focus={focusPrice}
                    error={errorPrice}
                    onFocus={() => setFocusPrice(true)}
                    onBlur={() => setFocusPrice(false)}
                >
                    <Ionicons name={'logo-usd'} size={25} color={errorPrice ? 'tomato' : 'white'} style={style.inputIcon} />
                    <InputMask
                        style={style.input}
                        value={priceInput}
                        mask="currency"
                        maxLength={10}
                        keyboardType='phone-pad'
                        placeholder='Pre??o:'
                        placeholderTextColor={errorPrice ? 'tomato' : 'gray'}
                        inputMaskChange={(text) => setCurrency(text)}

                    />
                </InputViewPrice>

                {/* Date Input */}
                <InputViewDate
                    focus={focusDate}
                    error={errorDate}
                    onFocus={() => setFocusDate(true)}
                    onBlur={() => setFocusDate(false)}
                >
                    <Ionicons name={'calendar-outline'} size={25} color={errorDate ? 'tomato' : 'white'} style={style.inputIcon} />
                    <InputMask
                        style={style.input}
                        value={dateInput}
                        mask="date"
                        maxLength={10} // 01/01/2021
                        keyboardType='phone-pad'
                        placeholder='Data: dia/m??s/ano'
                        placeholderTextColor={errorDate ? 'tomato' : 'gray'}
                        inputMaskChange={(text) => setDate(text)}

                    />
                </InputViewDate>

                {/* Button */}
                <TouchableOpacity
                    onPress={submit}
                    style={style.button}>
                    <Text style={style.buttonText}>Salvar</Text>
                </TouchableOpacity>

            </Container>
        </DismissKeyboard>
    )
}

