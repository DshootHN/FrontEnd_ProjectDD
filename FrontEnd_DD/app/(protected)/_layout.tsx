import { useAuth } from "../../contexts/AuthContext";
import { TareasProvider } from "@/contexts/TareaContext";
import { Redirect, Stack } from "expo-router";

import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProtectedLayout() {
    const { isAllowed } = useAuth();
    if (!isAllowed) return <Redirect href="/login" />
    return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <IconSymbol size={23} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="listTarea"
        options={{
          title: 'Listar Tareas',
          tabBarIcon: ({ color }) => <Ionicons size={23} name="newspaper" color={color} />,
        }}
      />
      <Tabs.Screen
        name="addTarea"
        options={{
          title: 'Agregar Tarea',
          tabBarIcon: ({ color }) => <Ionicons size={23} name="push" color={color} />,
        }}
      />
    </Tabs>
  );
}