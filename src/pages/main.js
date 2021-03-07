import React from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import Style from '../../styles/style';
import { ScrollView } from 'react-native-gesture-handler';


const style = Style;


function Main({ navigation }) {

    function maintenanceScreen() {
        navigation.navigate('maintenance');
    }

    return (

        <SafeAreaView style={style.container}>
            <ScrollView>
                <View style={style.container}>

                    <Text style={style.headerText}>Nome do Serviço</Text>
                    <TextInput style={style.input} />

                    <Text style={style.headerText}>Valor</Text>
                    <TextInput style={style.input} />

                    <Text style={style.headerText}>Data</Text>
                    <TextInput style={style.input} />

                    <TouchableOpacity
                        onPress={maintenanceScreen}
                        style={style.button}>

                        <Text style={style.buttonText}>Salvar</Text>

                    </TouchableOpacity>

                </View >
            </ScrollView>
        </SafeAreaView>
    )
}


export default Main;
