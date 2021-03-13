import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


import style from './style';



function Maintenance({ navigation }) {
    return (
        <View style={style.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate('index')}
                style={style.button}>

                <Text style={style.buttonText}>Principal</Text>

            </TouchableOpacity>
        </View>
    )
}


export default Maintenance;
