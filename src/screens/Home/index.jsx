import React from "react";
import { View, Text, Image } from "react-native";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";
import styles from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />
      
      <Text style={styles.greeting}>Bem-vindo, {user.name}!</Text>

      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/98625123?v=4" }}
        style={styles.profileImage}
      />

      <Text style={styles.subtitle}>Explore suas opções:</Text>

      <TouchButton route="Profile" title="Ir para o Perfil" data={user} />
      <TouchButton route="Category" title="Ir para a Categoria" />
    </View>
  );
}