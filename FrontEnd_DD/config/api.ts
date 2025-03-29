import { Platform } from "react-native";
//para web o utilizar en la computadora
const LOCALHOST = "localhost:5144";

//para emulador android
const EMULATOR_HOST = "localhost:5144";

//dispositivo fisico (expo go) utilizando la ip de la computadora
const DEVICE_HOST = "localhost:5144";

export const BASE_URL =
  Platform.OS === "android" || "ios"
    ? (__DEV__ ? `http://${EMULATOR_HOST}` : `http://${DEVICE_HOST}`)
    : `http://${LOCALHOST}`;