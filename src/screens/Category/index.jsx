import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";

export default function Category() {
  return (
    <ScrollView style={styles.container}>
      <Title title="Últimas Notícias" />

      <Image
        source={{ uri: "https://i.imgur.com/nL5nGE8.png" }} // Substitua por uma imagem relevante
        style={styles.image}
      />

      <Text style={styles.headline}>
        Felipe Santos e Raiam Santos se Encontram na Rússia!
      </Text>

      <View style={styles.articleContainer}>
        <Text style={styles.article}>
          Em um encontro inesperado durante uma conferência de tecnologia em Moscou, Felipe Santos teve a oportunidade de conhecer pessoalmente Raiam Santos. O encontro aconteceu em um dos eventos mais prestigiados do setor, onde líderes de tecnologia de todo o mundo se reúnem para discutir o futuro da indústria.
        </Text>

        <Text style={styles.article}>
          Felipe e Raiam conversaram longamente sobre tendências emergentes em desenvolvimento web, inteligência artificial, e compartilharam insights valiosos sobre suas experiências profissionais. "Foi inspirador", comentou Felipe, descrevendo o encontro como um ponto alto de sua viagem.
        </Text>

        <Text style={styles.article}>
          Este encontro não só fortaleceu laços pessoais, mas também abriu portas para futuras colaborações entre os dois, com promessas de projetos inovadores que podem impactar significativamente o cenário tecnológico global.
        </Text>
      </View>

      <TouchButton route="Home" title="Voltar para a Home" />
      <TouchButton route="Profile" title="Ver Perfil" data={user} />
    </ScrollView>
  );
}