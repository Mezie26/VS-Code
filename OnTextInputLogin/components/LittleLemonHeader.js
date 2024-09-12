import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.20,
    backgroundColor: '#EE9972',
  },
  headerText: {
    padding: 40,
    marginTop: 25,
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});