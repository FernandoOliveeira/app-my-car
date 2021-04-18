import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import style, { List, Container, TotalText } from './style';
import Repository from '../../components/repository';
import { maskCurrency } from '../../utils/masks';

// Receive all data from Async Storage
let jsonObject = [];
// Receive all price values  
let totalPrice = "0";


function Maintenance() {
    // Hooks
    const [repositories, setRepositories] = useState([])
    const [totalPriceText, setTotalPriceText] = useState()

    useEffect(() => {
        setTotalPriceText(maskCurrency(totalPrice));
        LoadAllKeys();
    }, []);


    // Set a number to only 2 precision numbers
    const strip = number => parseFloat(number.toPrecision(12));


    // Sum all price values in async storage
    const sumPrices = value => {
        totalPrice += parseFloat(value.priceInput.replace('.', '').replace(',', '.'));
        setTotalPriceText(maskCurrency(strip(totalPrice * 100).toString()));
    }

    // Get the item from a specific key from Async Storage
    const GetItem = async (key) => {
        try {
            await AsyncStorage.getItem(key).then(result => {
                jsonObject.push(JSON.parse(result));

            })

        } catch (err) {
            console.log("GetItemErrorMessage: " + err);
        }
        setRepositories(jsonObject);

        // Setting totalPrice to zero to avoid data duplication
        totalPrice = 0;

        jsonObject.forEach(sumPrices)
        console.log("Total Price: ", totalPrice);

    }

    // Load all keys from Async Storage
    const LoadAllKeys = async () => {
        jsonObject = []; // Setting jsonObject to empty to avoid data duplication

        let keys = [];

        try {
            keys = await AsyncStorage.getAllKeys();

            keys.forEach(key => {
                GetItem(key);
            })

        } catch (err) {
            console.log("LoadAllKeysErrorMessage: " + err);
        }

    }


    return (

        <Container>
            <List
                keyboardShouldPersistTaps="handled"
                data={repositories}
                keyExtractor={item => String(item.serviceInput)}
                renderItem={({ item }) => (
                    <Repository data={item} />
                )}
            />

            <TotalText>Total: R${totalPriceText}</TotalText>
            <TouchableOpacity
                onPress={LoadAllKeys}
                style={style.button}>
                <Text style={style.buttonText}>Atualizar</Text>
            </TouchableOpacity>
        </Container>
    )
}


export default Maintenance;
