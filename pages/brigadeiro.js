import * as React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Passo 2</Text>
      <Text style={styles.heading}>Prepare o Brigadeiro</Text>

      <Image source={require('../assets/pages/brigadeiro.png')} style={styles.image} />

      <Text style={styles.paragraph}>
        O brigadeiro é um doce típico brasileiro que é considerado uma verdadeira paixão nacional. Ele é indispensável em festas de aniversário infantis, onde é um dos docinhos preferidos das crianças. O sabor do brigadeiro é adorado por pessoas de todas as idades e é difícil resistir a ele. Além disso, sua preparação é muito fácil e não requer muitos ingredientes.
      </Text>

      <Image source={require('../assets/pages/brigadeiro.gif')} style={styles.image} />

      <Text style={styles.content}>
        <Text style={styles.subtitle}>Ingredientes:{"\n"}{"\n"}</Text>
        - 1 lata de leite condensado{"\n"}
        - 1 colher de sopa de manteiga{"\n"}
        - 4 colheres de sopa de chocolate em pó{"\n"}
        - Granulado para decorar{"\n"}
      </Text>

      <Text style={styles.content}>
        <Text style={styles.subtitle}>Modo de preparo:{"\n"}{"\n"}</Text>
        1. Em uma panela, coloque o leite condensado, a manteiga e o chocolate em pó.{"\n"}
        2. Leve ao fogo médio, mexendo sempre, até que a mistura comece a desgrudar do fundo da panela.{"\n"}
        3. Desligue o fogo e transfira a mistura para um prato untado com manteiga.{"\n"}
        4. Deixe esfriar um pouco e faça bolinhas com as mãos untadas com manteiga.{"\n"}
        5. Passe as bolinhas no granulado e coloque em forminhas de papel.{"\n"}
        6. Leve à geladeira por cerca de 30 minutos antes de servir.{"\n"}
      </Text>

      <Text style={styles.paragraph}> Veja o resultado: </Text>
      <Image source={require('../assets/pages/brigadeiro2.gif')} style={styles.image} />

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

