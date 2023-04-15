import * as React from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Video } from 'expo-av';

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.heading}>Passo 3</Text>
      <Text style={styles.heading}>Prepare o Bolo de Aniversário</Text>

      <Image source={require('../assets/pages/bolo.png')} style={styles.image} />

      <Text style={styles.paragraph}>
       O bolo é o centro das atenções e simboliza a celebração do aniversário do anfitrião. É comum vermos os olhos das crianças brilhando quando o bolo é apresentado na mesa, com suas velinhas acesas e decoração colorida. É um momento marcante e importante que gera memórias afetivas para a criança aniversariante e seus convidados. 
      </Text>

      <Text style={styles.paragraph}> A memória afetiva: </Text>
      <Image source={require('../assets/pages/bolo.gif')} style={styles.image} />

      <Text style={styles.content}>
        <Text style={styles.subtitle}>Ingredientes:{"\n"}{"\n"}</Text>
        - 3 xícaras (chá) de farinha de trigo{"\n"}
        - 2 xícaras (chá) de açúcar{"\n"}
        - 1 xícara (chá) de óleo{"\n"}
        - 1 xícara (chá) de leite{"\n"}
        - 4 ovos{"\n"}
        - 1 colher (sopa) de fermento em pó{"\n"}
      </Text>

      <Text style={styles.content}>
        <Text style={styles.subtitle}>Modo de preparo:{"\n"}{"\n"}</Text>
        1. Em uma tigela, misture a farinha de trigo, o açúcar e o óleo.{"\n"}
        2. Adicione os ovos e o leite e misture bem até obter uma massa homogênea.{"\n"}
        3. Por último, adicione o fermento em pó e misture delicadamente.{"\n"}
        4. Despeje a massa em uma forma untada e enfarinhada e leve ao forno preaquecido a 180°C por cerca de 40 minutos, ou até que o bolo esteja dourado e firme ao toque.{"\n"}
        5. Deixe o bolo esfriar antes de desenformar e decorar com o recheio e a cobertura de sua preferência.{"\n"}
      </Text>

      <Text style={styles.paragraph}> No fim é só comer tudo: </Text>
      <Image source={require('../assets/pages/bolo2.gif')} style={styles.image} />

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
    height: 300,
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
    fontSize: 22,
    marginBottom: 10,
    },
    paragraph: {
    margin: 20,
    textAlign: 'justify',
    fontSize: 18,
    },
});
