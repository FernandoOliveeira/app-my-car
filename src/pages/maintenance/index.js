import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import style, { List, Container } from './style';
import Repository from '../../components/repository';


// Receive all data from Async Storage
const jsonObject = [];


function Maintenance() {
    // Hooks
    const [repositories, setRepositories] = useState([])


    useEffect(() => {
        LoadAllKeys()
    }, [])


    // Get the item from a specific key from Async Storage
    const GetItem = async (key) => {
        try {
            await AsyncStorage.getItem(key).then(result => {
                jsonObject.push(JSON.parse(result))

            })

            setRepositories(jsonObject)

        } catch (err) {
            console.log(err)
        }
    }

    // Load all keys from Async Storage
    const LoadAllKeys = async () => {
        let keys = [];

        try {
            keys = await AsyncStorage.getAllKeys();

            keys.forEach(key => {
                GetItem(key)
            })

        } catch (err) {
            console.log(err)
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
                onPress={LoadAllKeys}
                style={style.button}>
                <Text style={style.buttonText}>Atualizar</Text>
            </TouchableOpacity>
        </Container>
    )
}


export default Maintenance;
