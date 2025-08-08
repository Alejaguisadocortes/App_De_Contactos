import { useState } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
} from 'react-native';

export default function My_App_ContactosScreen({ navigation }) {
  const [contactos, setContactos] = useState([
  { id: 1, name: "Santiago Parra", phone: "3004223154", favorite: false },
  { id: 2, name: "Juan Emilio Pasos", phone: "3207776834", favorite: true },
  { id: 3, name: "Marcela Juarez", phone: "3154329065", favorite: false },
  { id: 4, name: "Pedro Pablo Jaramillo", phone: "3014395438", favorite: true },
  { id: 5, name: "Heladio Heredia", phone: "3234782314", favorite: true },
  { id: 6, name: "Pilicra Potes", phone: "3508743322", favorite: true },
  ]);

  const [filterMode, setFilterMode] = useState('all');

  const addContacto = (nuevoContacto) => {
    setContactos((prev) => [...prev, nuevoContacto]);
  };

  // Filtro simple (por ahora muestra todos, puedes agregar favoritos después)
  const displayedContactos = contactos; // puedes cambiar esto según el filtro

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mis Contactos</Text>

      {/* Fila de botones de filtro */}
      <View style={styles.filterRow}>
        <Button
          title="Todos"
          onPress={() => setFilterMode('all')}
          color={filterMode === 'all' ? '#131415ff' : undefined}
        />
        <Button
          title="Nombre"
          onPress={() => setFilterMode('nombre')}
          color={filterMode === 'nombre' ? '#9900ffff' : undefined}
        />
        <Button
          title="Teléfono"
          onPress={() => setFilterMode('telefono')}
          color={filterMode === 'telefono' ? '#007AFF' : undefined}
        />
      </View>

      {/* Lista filtrada */}
      <ScrollView style={styles.list}>
        {displayedContactos.map((contacto) => (
          <View key={contacto.id} style={styles.contactRow}>
            <Text style={styles.icon}>📇</Text>
            <Text style={styles.contactText}>{contacto.title}</Text>
          </View>
        ))}
      </ScrollView>

      <Button
        title="Crear Nuevo Contacto"
        onPress={() => navigation.navigate('AddContacto', { addContacto })}
        color={filterMode === 'telefono' ? '#f2ff00ff' : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#22571cff' },
  header: { fontSize: 24, marginBottom: 12 },
  filterRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 13 },
  list: { flex: 1, marginBottom: 12 },
  contactRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 9 },
  icon: { fontSize: 18, marginRight: 8 },
  contactText: { fontSize: 16 },
});
