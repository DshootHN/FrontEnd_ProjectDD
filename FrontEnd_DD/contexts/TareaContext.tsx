import React, { ReactNode } from "react";
import { createContext, isValidElement, useContext, useState } from "react"

interface Tarea {
    id: string;
    nombre: string;
    descripcion: string;
    fecha: string;
}

interface TareaContext {
    tareas: Tarea[];
    addTarea: (tarea: Tarea) => void;
}

const TareasContext = createContext<TareaContext | undefined> (undefined);

export const TareasProvider = ({ children }: { children: ReactNode }) => {
    const [tareas, setTareas] = useState<Tarea[]>([]);
  
    const addTarea = (tarea: Tarea) => {
      setTareas([...tareas, tarea]);
    };
  
    return (
      <TareasContext.Provider value={{ tareas, addTarea }}>
        {children}
      </TareasContext.Provider>
    );
};

export const useTareas = () => {
    const context = useContext(TareasContext);
    if (!context) {
      throw new Error("useTareas debe usarse dentro de un TareasProvider");
    }
    return context;
  };
