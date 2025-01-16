
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/native/lib/typescript/module/src/__stubs__/createStackNavigator";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "./app/presentation/views/auth/Login";
import RegistroScreen from "./app/presentation/views/auth/Registro";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen}  />
        <Stack.Screen name="RegistroScreen" component={RegistroScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
  );
}


