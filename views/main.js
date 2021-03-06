import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Style from '../styles/style'


const style = Style;

export default class Main extends React.Component {
    render() {

        return (
            <View style={style.containerMain}>
                { /*--- Header ---*/}
                <Text style={style.headerText}>Nome do Serviço</Text>
                <TextInput style={style.input} />


                <TouchableOpacity
                    onPress={() => alert(`Dados Salvos com Sucesso !`)}
                    style={{ backgroundColor: 'blue', borderRadius: 10 }}>

                    <Text style={{ fontSize: 20, color: '#fff', margin: 10, padding: 10 }}>Aperte Aqui</Text>

                </TouchableOpacity>

            </View >
        )
    }
}



