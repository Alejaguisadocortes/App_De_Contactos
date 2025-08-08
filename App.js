import { Text, View } from 'react-native';

import StackNavigator from './src/navigation/StackNavigator';

function MainApp() {
  return <StackNavigator />;
}


// export default function My_App_Contactos() {
//   return (
//     <View>
//       <Text>Mi Aplicación de Contactos</Text>
//     </View>
//   );
// }
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    const titulo = "Mis Contactos App"; 
       res.render('index', { titulo: MisContactosApp });
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const appTitle = "Lista de Contactos";
const contacts = [
  { id: 1, name: "Santiago Parra", phone: "3004223154", favorite: false },
  { id: 2, name: "Juan Emilio Pasos", phone: "3207776834", favorite: true },
  { id: 3, name: "Marcela Juarez", phone: "3154329065", favorite: false },
  { id: 4, name: "Pedro Pablo Jaramillo", phone: "3014395438", favorite: true },
  { id: 5, name: "Heladio Heredia", phone: "3234782314", favorite: true },
  { id: 6, name: "Pilicra Potes", phone: "3508743322", favorite: true },
];

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{appTitle}</Text>
      {contacts.map((contact) => (
        <View key={contact.id}>
          <Text>{contact.name}</Text>
          <Text>{contact.phone}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;

{contacts.length === 0 ? (
  <Text>No hay contactos</Text>
) : (
  contacts.map((c, i) => (
    <Text key={i}>{c.name} - {c.phone}</Text>
  ))
)}

for (let i = 0; i < contacts.length; i++) {
  console.log(contacts[i].name);
}

contacts.map((c) => <Text>{c.name}</Text>);

contacts.map((c, i) => (
  <Text key={i}>
    {c.favorite ? '⭐' : '➖'} {c.name}
  </Text>
));

<Text style={{ fontWeight: c.favorite ? 'bold' : 'normal' }}>
  {c.name}
</Text>
const [filterMode, setFilterMode] = useState('all');
<View style={{ flexDirection: 'row' }}>
  <Button
    title="Todos"
    onPress={() => setFilterMode('all')}
    color={filterMode === 'all' ? 'blue' : 'gray'}
  />
  <Button
    title="Favoritos"
    onPress={() => setFilterMode('favorites')}
    color={filterMode === 'favorites' ? 'blue' : 'gray'}
  />
</View>
const filteredContacts = filterMode === 'favorites'
  ? contacts.filter(c => c.favorite)
  : contacts;

filteredContacts.map((c, i) => (
  <Text key={i}>{c.name}</Text>
));

