import { View, Text, StyleSheet } from 'react-native';

export default function Contacto({ nombre, telefono }: { nombre: string; telefono: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.nombre}>{nombre}</Text>
      <Text style={styles.telefono}>{telefono}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#258996ff',
    borderRadius: 11,
    marginBottom: 9,
  },
  nombre: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  telefono: {
    fontSize: 17,
    color: '#d74343ff',
  },
});
