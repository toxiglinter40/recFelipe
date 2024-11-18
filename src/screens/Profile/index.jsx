import React from "react";
import { Text, View, Image } from "react-native";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import styles from "./styles";
import { MaterialIcons } from '@expo/vector-icons'; // Biblioteca de ícones

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="Profile" />

      <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/98625123?v=4" }} // Substitua pela URL da imagem do usuário
        style={styles.profileImage}
      />

      <View style={styles.userInfo}>
        <Text style={styles.userName}>{data.name}</Text>
        <Text style={styles.userLocation}>{data.address.city}, {data.address.state}</Text>
      </View>

      <View style={styles.infoSection}>
        <MaterialIcons name="email" size={24} color="#555" />
        <Text style={styles.text}>{data.email}</Text>
      </View>

      <View style={styles.infoSection}>
        <MaterialIcons name="phone" size={24} color="#555" />
        <Text style={styles.text}>{data.phone}</Text>
      </View>

      <TouchButton route="Home" title="Voltar para a Home" />
      <TouchButton route="Category" title="Ver Categorias" />
    </View>
  );
}