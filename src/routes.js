import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
import Maintenance from './pages/maintenance';
import { SafeAreaView } from 'react-native';
import style from '../styles/style';


const Stack = createStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{ headerStyle: { backgroundColor: 'lightBlue' }, headerTintColor: 'black', headerTitleAlign: 'center' }}>

            <Stack.Screen name="index" component={Main} options={{ title: 'Principal' }} />
            <Stack.Screen name="maintenance" component={Maintenance} options={{ title: 'Manutenções' }} />

        </ Stack.Navigator >
    )
}

