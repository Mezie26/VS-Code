import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform} from 'react-native';

export default function LoginScreen() {
  const [email, onChangeEmail] = useState ('');
  const [password, onChangePassword] = useState ('');

  return (
    <KeyboardAvoidingView 
    styles={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ScrollView keyboardDismissMode='on-drag'>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
      <Text style={styles.regularText}>Login to continue </Text>
      <TextInput 
        style={styles.input}
        value={email}
        onChangeText={onChangeEmail}
        placeholder={'email'}
        keyboardType={'email-address'}
        />
      <TextInput
      style={styles.input}
      value={password}
      onChangeText={onChangePassword}
      placeholder={'password'}
      keyboardType={'default'}
      secureTextEntry={true}
      />
    </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
    fontSize: 16,
    height: 40,
    padding: 10,
    borderWidth: 1,
    margin: 12,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE'
  }
});

