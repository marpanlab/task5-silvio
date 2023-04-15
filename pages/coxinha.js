import * as React from 'react';
import { View, StyleSheet, Image, Text, ScrollView, } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Passo 1</Text>
      <Text style={styles.heading}>Prepare as Coxinhas</Text>

      <Image source={require('../assets/pages/coxinha.png')} style={styles.image} />

      <Text style={styles.paragraph}>
        A coxinha é um salgadinho clássico e indispensável para qualquer festa infantil. Com sua massa crocante e recheio cremoso de frango, é uma opção que agrada a todos os paladares, desde as crianças até os adultos. Além disso, é fácil de comer e perfeita para ser servida como petisco. Não há festa infantil completa sem a presença da deliciosa coxinha!
      </Text>

      <Text style={styles.paragraph}> Veja como as crianças adoram coxinha: </Text>

      <Image source={require('../assets/pages/coxinha2.gif')} style={styles.image} />

      <Text style={styles.content}>
        <Text style={styles.subtitle}>Ingredientes:{"\n"}{"\n"}</Text>
        - 1kg de frango{"\n"}
        - 2 cebolas{"\n"}
        - 3 dentes de alho{"\n"}
        - 1/2 pimentão{"\n"}
        - Sal e pimenta a gosto{"\n"}
        - 1 xícara de caldo de frango{"\n"}
        - 1/2 xícara de farinha de trigo{"\n"}
        - 1/2 xícara de leite{"\n"}
        - 1/2 xícara de requeijão{"\n"}
      </Text>

      <Text style={styles.content}>
        <Text style={styles.subtitle}>Modo de preparo:{"\n"}{"\n"}</Text>
        1. Cozinhe o frango com água, sal, pimenta, cebola e alho até que esteja bem macio.{"\n"}
        2. Desfie o frango e refogue com cebola, alho e pimentão.{"\n"}
        3. Adicione o caldo de frango e deixe ferver por alguns minutos.{"\n"}
        4. Adicione a farinha e mexa bem. Em seguida, adicione o leite e o requeijão.{"\n"}
        5. Continue mexendo até que a mistura comece a desgrudar do fundo da panela.{"\n"}
        6. Deixe esfriar um pouco e comece a moldar as coxinhas.{"\n"}
        7. Passe cada coxinha no ovo batido e na farinha de rosca.{"\n"}
        8. Frite em óleo quente até que fiquem douradas.{"\n"}
      </Text>

      <Text style={styles.paragraph}> Veja o resultado: </Text>
      <Image source={require('../assets/pages/coxinha.gif')} style={styles.image} />

      <Text style={styles.content}>
      {"\n"}
      </Text>
    </View>
    </ScrollView>
  );
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
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 24,
    borderRadius: 20
  },
  content: {
    fontSize: 18,
    lineHeight: 24,
    margin: 24,

  },
  subtitle: {
    fontWeight: 'bold',
  },
    paragraph: {
    margin: 20,
    textAlign: 'justify',
    fontSize: 18,
  },
});