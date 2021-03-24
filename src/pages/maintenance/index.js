import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import style, { List, Container } from './style';
import Repository from '../../components/repository';


function Maintenance() {
    // Hooks
    const [repositories, setRepositories] = useState([])


    const jsonObject = [];

    useEffect(() => {
        loadAllKeys()
    }, [])



    // Get the item from a specific key from Async Storage
    const getItem = async (key) => {
        try {
            await AsyncStorage.getItem(key).then(result => {
                jsonObject.push(JSON.parse(result))


            })
            setRepositories(jsonObject)
        } catch (err) {

        }
    }

    // Load all keys from Async Storage
    const loadAllKeys = async () => {
        let keys = [];

        try {
            keys = await AsyncStorage.getAllKeys();

            keys.forEach(key => {
                getItem(key)
            })

        } catch (err) {

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

            <TouchableOpacity
                onPress={loadAllKeys}
                style={style.button}>
                <Text style={style.buttonText}>Atualizar</Text>
            </TouchableOpacity>
        </Container>
    )
}


export default Maintenance;
