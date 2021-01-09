import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
      <Text style={styles.text}>DS Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 50+40,
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    fontFamily: 'OpenSans_700Bold'
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 25,
    letterSpacing: -0.24,
    textAlign: 'left',
    marginLeft: 15
  }
});
