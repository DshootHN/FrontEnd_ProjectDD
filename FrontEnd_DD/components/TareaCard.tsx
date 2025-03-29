import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TareaCard {
  nombre: string;
  descripcion: string;
  fecha: string;
}

const TareaItem: React.FC<TareaCard> = ({ nombre, descripcion, fecha }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.textTitle}>{nombre}</Text>
      <Text style={styles.text}>Tipo Tarea: {descripcion}</Text>
      <Text style={styles.text}>Fecha de Entrega: {fecha}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "#fff",
    fontSize: 16,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  textTitle: {
    fontSize: 18,
    fontFamily: "Calibri",
    textAlign: "center",
    fontWeight: "bold"
  },
});

export default TareaItem;
