import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import Contacto from '../components/Contacto';

/**
 * Pantalla para mostrar la lista de contactos.
 * Utiliza FlatList para renderizar una lista de contactos.
 */ 
export default function ListaContactos() {
  const [contactos] = useState([
    { id: '1', nombre: 'Juan Pérez', telefono: '3001234567' },
    { id: '2', nombre: 'Ana Gómez', telefono: '3109876543' },
    { id: '3', nombre: 'Luis Rodríguez', telefono: '3201122334' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>📒 Mis Contactos</Text>
      <FlatList
        data={contactos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Contacto nombre={item.nombre} telefono={item.telefono} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
});
