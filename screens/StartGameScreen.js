import { useState } from "react";
import PrimaryButton from  "../components/PrimaryButtons";
import { View,TextInput,StyleSheet,Alert } from "react-native";


function StartGameScreen({onPickNum}){
    const[enteredNumber,setEnterednumber]=useState('');

    function numberInputHandler(enteredText){
        setEnterednumber(enteredText);
    }
    function resetInputHandler(){
        setEnterednumber("");
    }

    function confirmInputHandler(){
         const chosenNumber= parseInt(enteredNumber);

         if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert("Invalid Number!",
             "Please enter a number between 1 and 99",
             [{text:'okay', style:'destructive', onPress:resetInputHandler}]
             );
            return;
         }
         onPickNum(chosenNumber);

    }

    return(
        <View style={styles.inputContainer}>
            <TextInput
             style={styles.numInput} 
              maxLength={2} 
            keyboardType="number-pad"
            onChangeText={numberInputHandler}
            value={enteredNumber}
            />
         <View style={styles.buttonsContainer}>
             <View style={styles.button}>
             <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
             </View>
             <View style={styles.button}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
    backgroundColor:'#3b021f',
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