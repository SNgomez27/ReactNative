import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: "black",
    padding:20,


  },
  titulo:{
    paddingTop:30,
    textAlign: "center",
    color: "white",
    fontSize:18,
    fontWeight:"bold",
    fontFamily:"Helvetica",

  },
  logo:{
    paddingTop:30,
    width:200,
    height:200,
    alignSelf:'center',
  },
  formContainer:{
    width: '95%',
    backgroundColor:"white",
    paddingVertical:25,
    paddingHorizontal:15,
    marginHorizontal:"auto",
    marginTop:80,
    borderRadius:25,

  },
  formTitle:{
    fontSize:18,
    fontWeight:"bold",
    marginBottom:15,
    borderBottomWidth:1,
    paddingBottom: 9,
    color:"#242424",
    borderBottomColor:"#242424"

  },

  formInputContainer:{
    marginBottom:20
  },
  formStyle:{
    marginTop:10,
    borderColor:"#242424",
    borderWidth:1,
    paddingVertical:7,
    paddingHorizontal:10,
    borderRadius:15,
  },
  buttonForm:{
    backgroundColor:"#7f1616",
    paddingVertical:9,
    paddingHorizontal:20,
    borderRadius:5,
  },
  buttonFormText:{
    color:"#fff",
    textAlign:"center",
    fontSize:16,
  }
});





export default styles;