import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from "react-native";


export default function LoginScreen() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const router = useRouter();
const {login} = useAuth();


const registroClienteRou = () => {
  router.push('/register_client'); 
};

const registroProveedorRou = () => {
  router.push('/register_prov'); 
};

const handleLogin = async () => {

  try {
      await login(email, password);
      router.push('/home');
  } catch (error) {
      alert("Credenciales incorrectas");
  }
}

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput style={styles.input} placeholder="Correo Electrónico" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Contraseña" value={password} onChangeText={setPassword} secureTextEntry/>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>

            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>¿No tienes cuenta?</Text>
                <TouchableOpacity onPress={registroClienteRou}>
                    <Text style={styles.linkText}>Registrar Cliente</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={registroProveedorRou}>
                    <Text style={styles.linkText}>Registrar Proveedor</Text>
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
    title: { 
      fontSize: 24, 
      fontWeight: 'bold', 
      marginBottom: 20, 
      textAlign: 'center' 
    },
    input: { height: 40, 
      borderWidth: 1, 
      borderColor: '#ccc', 
      paddingHorizontal: 10, 
      marginBottom: 10 
    },
    userText: { fontSize: 16, 
      fontWeight: 'bold', 
      color: '#555', 
      textAlign: 'center', 
      marginTop: 20 
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
    registerContainer: {
      marginTop: 20,
      alignItems: "center",
    },
    registerText: {
        fontSize: 16,
        color: "#555",
    },
    linkText: {
        fontSize: 16,
        color: "#007BFF",
        textDecorationLine: 'underline',
        marginVertical: 5,
    },
  });