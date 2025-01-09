import React from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";
export function LoginScreen(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require("../../../../assets/logo.png")}></Image>
                <Text style={styles.titulo}>Aplicacion</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTitle}> Iniciar sesion </Text>
                <View style={styles.formStyle}>
                    <TextInput style={styles.formInputContainer}
                               placeholder={"Usuario"}
                               keyboardType={"default"}
                               secureTextEntry={false}
                    ></TextInput>
                </View>

                <View style={styles.formStyle}>
                    <TextInput style={styles.formInputContainer}
                               placeholder={"Contraseña"}
                               keyboardType={"default"}
                               secureTextEntry={true}
                    ></TextInput>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonForm} onPress={() => {ToastAndroid.show("Presionado Toast",ToastAndroid.LONG)}}>
                        <Text style={styles.buttonFormText}>Entrar</Text>
                    </TouchableOpacity>

                </View>

                <View>
                    <TouchableOpacity onPress={() => {navigation.navigate("RegistroScreen")}}>
                        <Text>Registrarme </Text></TouchableOpacity>
                </View>


            </View>
        </View>
    );
}