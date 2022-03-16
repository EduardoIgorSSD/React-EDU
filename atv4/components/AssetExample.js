import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Asas da Liberdade
      </Text>
    <Image style={styles.logo} source={require('../assets/tropa.png')} />
    
      <Text style={styles.paragraph}>
        Distrito de Shiganshina
      </Text>
      <Text style={styles.paragraph1}>
        (71) 99262-3749
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#0c5043',
  },
  
    text:{
    margin: 14,
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#243454',
    },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#243454',
    
  },
    paragraph1: {
    margin: 24,
    marginTop: -25,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#243454',
    
  },
  logo: {
    height: 150,
    width: 128,
  }
});
