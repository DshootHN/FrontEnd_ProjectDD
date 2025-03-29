import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { RegistrarProveedor } from "@/config/apiService"; // Importa la función desde el servicio

export default function RegisterProveedor() {
    const [correo, setEmail] = useState('');
    const [nombreProv, setName] = useState('');
    const [contrasena, setPassword] = useState('');
    const [anosExperiencia, setExperience] = useState('');
    const [tecnologia, setTechnology] = useState('');
    const [precio, setPrice] = useState('');
    const [contacto, setContact] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSignUp = async () => {
        setError('');  // Limpiar errores anteriores

        try {
            // Llamada a la API para crear la cuenta
            const data = await RegistrarProveedor(correo, nombreProv, contrasena, anosExperiencia, tecnologia, Number(precio), contacto);
            alert("Cuenta creada con éxito");
            router.replace('/login');  // Redirigir al login
        } catch (error) {
            setError((error as any).message);  // Mostrar mensaje de error
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crear Cuenta</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombreProv}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo Electrónico"
                value={correo}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={contrasena}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="Contacto"
                value={contacto}
                onChangeText={setContact}
            />
            <TextInput
                style={styles.input}
                placeholder="Años de Experiencia"
                value={anosExperiencia}
                onChangeText={setExperience}
            />
            <TextInput
                style={styles.input}
                placeholder="Tecnología"
                value={tecnologia}
                onChangeText={setTechnology}
            />
            <TextInput
                style={styles.input}
                placeholder="Precio"
                value={precio}
                onChangeText={setPrice}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Crear Cuenta</Text>
            </TouchableOpacity>
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
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        marginBottom: 10,
        width: '100%',
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
    errorText: {
        color: 'red',
        marginTop: 10,
    },
});
