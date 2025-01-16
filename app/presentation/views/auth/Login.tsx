import React, {useState} from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../Components/RoundedButton";
import RegistroScreen from "./Registro";
import {RoundedTextInput} from "../../Components/TextInput";
export function LoginScreen(){
    const navigation = useNavigation();


    const [usuario, setUsuario] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.logo} source={require("../../../../assets/logo.png")}></Image>
                <Text style={styles.titulo}>Aplicacion</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTitle}> Iniciar sesion </Text>
                <View style={styles.formStyle}>
                    <RoundedTextInput placeholder={"Usuario"}
                                      keyboardType={"default"}
                                      secureTextEntry={false}
                                      onPressButtonFromInterface={(text) => setUsuario(text)}>
                    </RoundedTextInput>

                </View>

                <View style={styles.formStyle}>
                    <RoundedTextInput placeholder={"Contraseña"}
                                      keyboardType={"default"}
                                      secureTextEntry={true}
                                      onPressButtonFromInterface={(text) => setPassword(text)}>

                    </RoundedTextInput>
                </View>

                <View>
                    <RoundedButton text={"Login"} onPressFromInterface={()=> {console.log("Inico sesion correctamente " + usuario + password)}}></RoundedButton>

                </View>

                <View>
                    <RoundedButton text={"Resgistrate"} onPressFromInterface={()=> navigation.navigate(RegistroScreen)}></RoundedButton>
                </View>


            </View>
        </View>
    );
}