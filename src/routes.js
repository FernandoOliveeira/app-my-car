import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
import Maintenance from './pages/maintenance';


const Stack = createStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{ headerStyle: { backgroundColor: 'white' }, headerTintColor: 'black', headerTitleAlign: 'center' }}>

            <Stack.Screen name="index" component={Main} options={{ title: 'Principal' }} />
            <Stack.Screen name="maintenance" component={Maintenance} options={{ title: 'Manutenções' }} />

        </ Stack.Navigator >
    )
}

