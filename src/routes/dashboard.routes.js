import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import main from '../pages/main/index';
import maintenance from '../pages/maintenance/index';

const Tab = createBottomTabNavigator();

export default function DashboardRoutes() {
  return (
    <Tab.Navigator
      // Insert icons on the bottom tab navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'main') {
            iconName = focused ? 'home-sharp' : 'home-outline';
          } else if (route.name === 'maintenance') {
            iconName = focused ? 'construct-sharp' : 'construct-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}

      // Set icons color
      tabBarOptions={{
        activeTintColor: '#0caac9',
        inactiveTintColor: '#022B3A'
      }}
    >

      <Tab.Screen name="main" component={main} options={{ title: 'Principal' }} />
      <Tab.Screen name="maintenance" component={maintenance} options={{ title: 'Manutenção' }} />
    </Tab.Navigator>

  );
}