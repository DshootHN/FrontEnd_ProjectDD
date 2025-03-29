import { Ionicons } from "@expo/vector-icons"
import { FlatList, TouchableOpacity, View, Text, StyleSheet } from "react-native"
import TareaItem from "@/components/TareaCard"
import { useTareas } from "@/contexts/TareaContext"


export default function ListScreen() {

    const {tareas} = useTareas();

    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons style={styles.headerIcon} name="newspaper" size={32} color="#fff" />
        <Text style={styles.headerText}>Asignaciones Pendientes</Text>
        <FlatList
          data={tareas}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TareaItem nombre={item.nombre} descripcion={item.descripcion} fecha={item.fecha} />
          )}
        />
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFF",
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    header: {
      width: "100%",
      backgroundColor: "#364FC7",
      borderRadius: 10,
      padding: 20,
      alignItems: "center",
      justifyContent: "center",
    },
    headerIcon: {
      marginBottom: 10,
    },
    headerText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 10,
    },
  });