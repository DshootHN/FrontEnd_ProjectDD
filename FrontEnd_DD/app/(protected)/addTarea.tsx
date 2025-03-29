import { useAuth } from "@/contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useTareas } from "@/contexts/TareaContext";
import { v4 as uuidv4} from "uuid";

export default function AddTarea() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const { addTarea } = useTareas();
  
  const handleAddTarea = () => {
    if (!nombre.trim() || !descripcion.trim() || !fecha.trim()) {
      Alert.alert("Error", "Por favor complete todos los campos.");
      return;
    }

    const nuevaTarea = {
      id: uuidv4(),
      nombre,
      descripcion,
      fecha,
    };

    addTarea(nuevaTarea);
    setNombre("");
    setDescripcion("");
    setFecha("");
    Alert.alert("Éxito", "Tarea agregada correctamente");
  };
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
            <Ionicons style={styles.headerIcon} name="push" size={32} color="#fff" />
            <Text style={styles.headerText}>Agregar Tarea</Text>
            <TextInput
              style={styles.input}
              placeholder="Nombre de la Tarea"
              value={nombre}
              onChangeText={setNombre}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Descripción"
              value={descripcion}
              onChangeText={setDescripcion}
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Fecha de Entrega"
              value={fecha}
              onChangeText={setFecha}
            />
          <TouchableOpacity style={styles.button} onPress={handleAddTarea}>
            <Text style={styles.buttonText}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
    input: {
      width: "100%",
      backgroundColor: "#fff",
      fontSize: 16,
      padding: 10,
      borderRadius: 8,
      marginBottom: 10,
    },
    button: {
      marginTop: 10,
      backgroundColor: "#FFD700",
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    buttonText: {
      color: "#000",
      fontWeight: "bold",
    },
  });