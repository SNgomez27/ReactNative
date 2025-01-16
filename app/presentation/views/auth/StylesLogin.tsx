import {StyleSheet} from "react-native";
import {AppColors} from "../../Theme/AppTheme";

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
    color: AppColors.secondary,
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
    color: AppColors.secondary,
    borderBottomColor: AppColors.secondary

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

  buttonRegist:{
    backgroundColor:"#7f1616",
    marginTop: 9,
    paddingVertical:9,
    paddingHorizontal:20,
    borderRadius:5,
  },

});





export default styles;