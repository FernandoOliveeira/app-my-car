import React from 'react';
import { View } from 'react-native';


import style, { List } from './style';
import Repository from '../../components/repository/index'



export default function Maintenance() {
    return (
        <View style={style.container}>
            <List
                data={[
                    {
                        id: 1,
                        service: "Serviço",
                        price: 25.22,
                        date: "01/01/2021"
                    }
                ]}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Repository data={item} />
                )}
            />
        </View>
    );
}


