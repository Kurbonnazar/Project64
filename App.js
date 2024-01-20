import React, { Component } from 'react';
import HomeScreen from './screens/HomeScreen';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>
<HomeScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
