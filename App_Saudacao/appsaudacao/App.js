import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [saudacao, setSaudacao] = useState('');

  const obterSaudacao = () => {
    const hora = new Date().getHours();
    if (hora < 12) return 'Bom dia';
    else if (hora < 18) return 'Boa tarde';
    else return 'Boa noite';
  };

  const atualizarSaudacao = () => {
    if (nome.trim() !== '') {
      setSaudacao(obterSaudacao());
    }
  };

  const limpar = () => {
    setNome('');
    setSaudacao('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>App Saudação</Text>
        <Image
          source={{ uri: 'https://i.pravatar.cc/200' }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />

        <Button title="Atualizar Saudação" onPress={atualizarSaudacao} />
        <View style={styles.espaco} />
        <Button title="Limpar" color="red" onPress={limpar} />

        {nome !== '' && saudacao !== '' && (
          <Text style={styles.saudacao}>
            {saudacao}, <Text style={{ fontWeight: 'bold' }}>{nome}</Text>! Bem-vindo(a) ao nosso App!
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4682B4',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomRightRadius: 35,
    borderBottomLeftRadius: 35,
  },
  headerText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  saudacao: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
  },
  espaco: {
    height: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#00d1ff',
  },
});
