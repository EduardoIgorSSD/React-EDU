import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function ComponenteImagem() {
  return (

    <View style={styles.container}>

      <Text style={styles.texto}>
        titulo
      </Text>
     
     <ScrollView style={styles.scrollView}>


        <Image style={styles.logo} source={require('../assets/IMAGEMPROFESSOR.jpeg')} 
        />
        
      </ScrollView>

      
    

    </View>
      

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  
  
  texto: {
    margin: 10,
    marginTop: 0,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  logo: {
    height: 150,
    width: 150,
  }
});
