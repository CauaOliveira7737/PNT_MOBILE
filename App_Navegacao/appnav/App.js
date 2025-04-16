// App.js
import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{ color: 'white'}}>Bem-vindo ao meu App de Navegação!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Perfil")}>
          <Text style={{ color: 'white', textAlign: 'center', marginTop: 10 }}>Clique aqui!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function PerfilScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={{ color: 'white'}}>Olá, essa é a Tela 2 com seu perfil!</Text>
      </View>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Perfil" component={PerfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  card: {
    backgroundColor: '#525252',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    width: '100%',
    maxWidth: 320,
  },

  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#000',
    marginTop: 20,
    marginLeft: 20,
    borderWidth: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: 'white',
  }
})