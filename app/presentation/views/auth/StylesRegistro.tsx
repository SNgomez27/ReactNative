import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',

    },

    titulo:{
        fontSize: 20,
        fontFamily: '"Roboto", sans-serif',
        fontWeight: 'bold',
        color: 'black',
        marginTop: "5%" ,
        marginBottom: "5%",
        textAlign:'center',
    },
    formContainer: {
        width: '95%',
        backgroundColor: 'white',
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginHorizontal: "auto",
        marginTop: 50,
        borderRadius:10,

    },
    formTitulo:{
        fontSize: 19,
        marginTop: 2,
        marginBottom: 15,
        borderBottomWidth: 1,
        paddingBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
    },

    formBoton:{
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        alignSelf: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: '#7f1616',
        width: '100%',
    },
    formBotonText:{
        fontSize: 20,
        alignSelf: 'center',
    }
});

export default styles;