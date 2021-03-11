import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DashboardRoutes from './dashboard.routes'

const Stack = createStackNavigator();

export default function Routes() {

    return (
        <Stack.Navigator initialRouteName="index" screenOptions={{ headerStyle: { backgroundColor: '#022B3A' }, headerTintColor: 'white', headerTitleAlign: 'center' }}>
            <Stack.Screen name="index" component={DashboardRoutes} options={{ title: 'My Car' }} />
        </ Stack.Navigator >
    )
}

