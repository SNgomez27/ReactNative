import * as React from 'react';
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesRegistro";
import {RoundedButton} from "../../Components/RoundedButton";
import {RoundedTextInput} from "../../Components/TextInput";

function RegistroScreen() {
    return (
        <View style={styles.container}>


            <View style={styles.formContainer}>
                <Text style={styles.titulo}>Register</Text>


                <View>

                   <RoundedTextInput placeholder={"Nombre"} keyboardType={"default"} secureTextEntry={false}></RoundedTextInput>
                </View>
                <View>
                    <RoundedTextInput placeholder={"Appelido"} keyboardType={"default"} secureTextEntry={false}></RoundedTextInput>
                </View>
                <View>

                    <RoundedTextInput placeholder={"Contraseña"} keyboardType={"default"} secureTextEntry={true}></RoundedTextInput>
                </View>
                <View>

                    <RoundedTextInput placeholder={"Telefono"} keyboardType={"phone-pad"} secureTextEntry={false}></RoundedTextInput>
                </View>

                <View>

                    <RoundedTextInput placeholder={"Mail"} keyboardType={"default"} secureTextEntry={false}></RoundedTextInput>
                </View>

                <View style={styles.formBoton}>
                    <RoundedButton text={"Registrar"} onPressFromInterface={()=> {alert("Inico registrado correctamente")}}></RoundedButton>

                </View>

            </View>

        </View>
    );
}

export default RegistroScreen;