import PrimaryButton from  "../components/PrimaryButtons";
import { View,TextInput,StyleSheet } from "react-native";


function StartGameScreen(){
    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.numInput}   maxLength={2} keyboardType="number-pad"/>
         <View style={styles.buttonsContainer}>
             <View style={styles.button}>
             <PrimaryButton>Reset</PrimaryButton>
             </View>
             <View style={styles.button}>
            <PrimaryButton>Confirm</PrimaryButton>
            </View>
         </View> 
        </View>
    );

}
export default StartGameScreen;

const styles=StyleSheet.create({
inputContainer:{
    justifyContent:'center',
    alignItems:'center',
    padding:16,
    marginTop:100,
    marginHorizontal:30,
    borderRadius:8,
    backgroundColor:'#4e0329',
    elevation:8,

},
numInput:{
    height:50,
    width:50,
    fontSize:32,
    borderBottomColor:'#ddb52f',
    borderBottomWidth:2,
    color:'#ddb52f',
    marginVertical:8,
    fontWeight:"bold",
    textAlign:"center"


},
buttonsContainer:{
    flexDirection:'row',
},
button:{
    flex:1
}
});