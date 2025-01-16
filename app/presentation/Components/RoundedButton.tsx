import React from "react";
import {Text,StyleSheet, TouchableOpacity} from "react-native";

interface Props {
    text: string,
    onPressFromInterface: () => void,
}


export const RoundedButton = ({text,onPressFromInterface}: Props) =>{
    return (
        <TouchableOpacity style={styles.buttonForm}
           onPress={() => onPressFromInterface()}>
            <Text style={styles.buttonFormText}>{text}</Text>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    buttonForm:{
        backgroundColor:"#7f1616",
        marginTop:9,
        paddingVertical:9,
        paddingHorizontal:20,
        borderRadius:5,
    },
    buttonFormText:{
        color:"#fff",
        textAlign:"center",
        fontSize:16,
    },
})