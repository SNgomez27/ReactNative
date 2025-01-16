import React from "react"
import {KeyboardType, TextInput, StyleSheet, Image} from "react-native";

interface TextProps {
    placeholder : string,
    keyboardType: KeyboardType,
    secureTextEntry: boolean,
    onPressButtonFromInterface: (text: string) => void,
}




export  const RoundedTextInput = ({placeholder, keyboardType, secureTextEntry,onPressButtonFromInterface}:TextProps) => {
    return  (

        <TextInput style={styles.formInput}
                   placeholder={placeholder}
                   keyboardType={keyboardType}
                   secureTextEntry={secureTextEntry}
                   onChangeText={(text) => onPressButtonFromInterface(text)}
        ></TextInput>
    )
}

const styles =StyleSheet.create({
    formInput: {
        fontSize: 17,
        marginBottom: 10,
        borderColor: 'black',
        borderWidth: 1,
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius:5,
    },
})