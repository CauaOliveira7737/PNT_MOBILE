import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1f1f1f" />
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://lumiere-a.akamaihd.net/v1/images/image_57ecff16.jpeg?region=0,0,640,480' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Cauã Pereira</Text>
        <Text style={styles.phrase}>“Técnico em Desenvolvimento de Sistemas”</Text>
      </View>
    </View>
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
    backgroundColor: '#1f1f1f',
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
  profileImage: {
    width: 120,
    height: 120,

    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#00d1ff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  phrase: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#cccccc',
    textAlign: 'center',
  },
});