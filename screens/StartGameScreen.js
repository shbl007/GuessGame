import { useState } from "react";
import PrimaryButton from  "../components/UI/PrimaryButtons";
import { View,TextInput,StyleSheet,Alert } from "react-native";
import color from "../components/constatnts/color";
import Title from "../components/UI/Title";
import Card from "../components/UI/card";
import InstructionText from "../components/UI/InstructionText";

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
       <View style={styles.rootContainer}>
        <Title>Guess my Number</Title>
        
        <Card>
          <InstructionText> Enter a Number</InstructionText> 
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
         </Card>

       
     </View>
    );

}
export default StartGameScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        marginTop:100,
        alignItems:'center'
    },

numInput:{
    height:50,
    width:50,
    fontSize:32,
    borderBottomColor:color.accent500,
    borderBottomWidth:2,
    color:color.accent500,
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