import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import CompImagem from './components/ComponenteImagem';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      
          <Text style={styles.texto}>
                Testando Imagem
          </Text>
       
          <Card>
            <CompImagem />

          </Card>
       
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 1,
  },
  texto: {
    margin: 100,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
