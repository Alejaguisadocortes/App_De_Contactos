import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import My_App_ContactosScreen from '../screens/My_App_ContactosScreen';
import AddContactsScreen from '../screens/AddContactscreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="My_App_Contactos" component={My_App_ContactosScreen} />
        <Stack.Screen name="AddContacts" component={AddContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

