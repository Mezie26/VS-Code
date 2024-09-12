import * as React from 'react';
import { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Pressable, Alert } from 'react-native';


const SubscribeScreen = () => {
  // Add subscribe screen code here
  const [email, onChangeEmail] = useState ('');

  return (
    <KeyboardAvoidingView 
    style={styles.container} 
    behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.pageview}>
      <Image 
      style={styles.images} 
      source={require('./assets/little-lemon-logo-grey.png')} 
      />
      <Text style={styles.regularText}>Subscribe to our newsletter for our latest delicious recipes!</Text>
      <TextInput
      style={styles.inputText}
      value={email}
      onChangeText={onChangeEmail}
      placeholder={'Type your email'}
      keyboardType={'email-address'}
      clearButtonMode={'always'}
      />
      <Pressable onPress={()=>{Alert.alert('Thanks for subscribing, stay tuned')}} style={styles.button}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
    </KeyboardAvoidingView>
  )
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageview: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  images: {
    height: 150,
    width: 100,
    resizeMode: "contain",
    padding: 50,
    margin: 50,
  },
  regularText: {
    fontSize: 20,
    padding: 10,
    color: '#000000',
    textAlign: 'center'
  },
  inputText: {
    fontSize: 16,
    height: 40,
    width: 370,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    margin: 12,
    borderColor: '#013220',
    backgroundColor: '#EDEFEE'
  },
  button: {
    fontSize: 20,
    paddingHorizontal: 135,
    paddingBottom: 1,
    marginHorizontal: 5,
    margin: 12,
    backgroundColor: '#013220',
    borderColor: '#013220',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonText: {
    color: '#EDEFEE',
    textAlign: 'center',
    fontSize: 20,
    width: 100,
  },
})
