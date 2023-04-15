import * as React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, } from 'react-native';
import Constants from 'expo-constants';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  ABeeZee_400Regular,
} from '@expo-google-fonts/dev';

export default function App() {
    let [fontsLoaded] = useFonts({
  ABeeZee_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
   
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>3 passos simples {"\n"} para alegrar uma festa infantil</Text>
      
      <Text style={styles.paragraph}>Alexia e Marlon</Text>
      <Image source={require('../assets/pages/home.gif')} style={styles.image} />

    </View>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  heading: {
    marginVertical: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',    
    fontFamily: 'ABeeZee_400Regular',
  },
  image: {
    width: '100%',
    height: 500,
    marginBottom: 24,
    borderRadius: 20
  },
    paragraph: {
    margin: 20,
    textAlign: 'center',
    fontFamily: 'ABeeZee_400Regular',
    fontSize: 16,
  },
});