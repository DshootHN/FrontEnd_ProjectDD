import { BASE_URL } from "@/config/api";
import { createContext, isValidElement, useContext, useState } from "react"

type User = {email: string} | null;

const AuthContext = createContext<{
    user: User,
    isAllowed: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
} | null>(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error ("useAuth debe usarse dentro de AuthProvider");
    return context;
}

export const AuthProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<User>(null);
    const [isAllowed, setIsAllowed] = useState<boolean>(false);

    const login =  async (email: string, password: string) => {
        
        try {
            const response = await fetch(`${BASE_URL}/api/Usuarios/login`, {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json", 
                },
                body: JSON.stringify({ email, password }), 
            });

            if (response.ok) {
                const data = await response.json();
                setUser({ email }); 
                setIsAllowed(true);  
                alert("Ingreso exitoso");
            } else {
                alert("Correo o contraseña incorrectos.");
                setIsAllowed(false);
            }
        } catch (error) {
            console.error("Error al hacer login", error);
            alert("Hubo un error al intentar ingresar.");
        }
    };

    const logout = () => {
        setUser(null);
        setIsAllowed(false);
    }

    return (
        <AuthContext.Provider value={{user, isAllowed, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
   
}