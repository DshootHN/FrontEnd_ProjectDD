// Importa BASE_URL desde el archivo de configuración
import { BASE_URL } from "@/config/api"; // Asegúrate de que la ruta esté correcta

// Función para crear un nuevo usuario
export const RegistrarProveedor = async (correo: string, nombreProv: string, contrasena: string, anosExperiencia: string, tecnologia: string, precio: number, contacto: string) => {
    try {
        const response = await fetch(`${BASE_URL}/api/Proveedores`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, nombreProv, contrasena, anosExperiencia, tecnologia, precio, contacto }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error al crear cuenta');
        }

        return data; // En caso de éxito, devuelve los datos de la respuesta
    } catch (error: any) {
        throw new Error(error.message || 'Error en la conexión');
    }
};

export const RegistrarCliente = async (correo: string, nombre: string, contrasena: string, compania: string) => {
    try {
        const response = await fetch(`${BASE_URL}/api/Usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo, nombre, contrasena, compania}),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Error al crear cuenta');
        }

        return data; // En caso de éxito, devuelve los datos de la respuesta
    } catch (error: any) {
        throw new Error(error.message || 'Error en la conexión');
    }
};
