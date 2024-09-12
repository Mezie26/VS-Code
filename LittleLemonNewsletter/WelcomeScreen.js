import * as React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return (
    <View style={styles.container}>
    <Image 
    style={styles.images}
    source={require('./assets/little-lemon-logo.png')}
    accessible={true}
    accessibilityLabel='Little lemon logo' />
    <Text style={styles.regularText}>Little Lemon, your local Mediterranean Bistro</Text>
    <Pressable onPress ={()=>navigation.navigate('Subscribe')} style={styles.button}>
      <Text style={styles.buttonText}>Newsletter</Text>
    </Pressable>
  </View>
  )}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  images: {
    height: 300,
    width: 200,
    resizeMode: "contain",
    margin: 50,
    marginTop: -40,
  },
  regularText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: '#000000',
    textAlign: 'center'
  },
  button: {
    fontSize: 22,
    paddingHorizontal: 130,
    paddingBottom: 1,
    marginHorizontal: 10,
    marginTop: 100,
    marginBottom: -100,
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