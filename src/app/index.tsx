import React, { use, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SQLite from 'expo-sqlite';

if (process.env.NODE_ENV === 'web') {
  SQLite.setCustomOpenDatabaseImplementation(async () => {
    const { SQLiteDatabase } = await import('wa-sqlite');
    return SQLiteDatabase.openDatabase();
  });
}

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [search, setSearch] = useState('');

  const handleRegister = async () => {
    try {
      await AsyncStorage.setItem('user_name', name);
      await AsyncStorage.setItem('user_email', email);
      Alert.alert('Sucesso', 'Informações salvas com sucesso!');
    } catch (e) {
      Alert.alert('Erro', 'Não foi possível salvar as informações.');
    }
  };

  async function list() {
    try {
      // Assuming `user` is an object with a `searchByName` method
      const user = {
        searchByName: async (name: string) => {
          // Mock implementation for demonstration
          return `User with name ${name} found.`;
        },
      };

      const response = await user.searchByName(name);
      console.log('Response:', response);
    } catch (error) {
      console.error('Erro na listagem:', error);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Cadastrar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});