import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import ContactListScreen from '../pantallas/ContactListScreen';
import AddContactScreen from '../pantallas/AddContactScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contactos" component={ContactListScreen} />
        <Stack.Screen name="Agregar" component={AddContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
