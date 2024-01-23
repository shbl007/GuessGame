import { Text, View ,StyleSheet, Alert} from "react-native";
import Title from "../components/UI/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButtons";
import Card from "../components/UI/card";
import InstructionText from "../components/UI/InstructionText";

import { useEffect } from "react";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  let minBoundary=1;
  let maxBoundary=100;

function GamesScreen({gameNumber ,onGameOver}){
const initialGuess=generateRandomBetween(1,100,gameNumber);
const [currentGuess,setCurrentGuess]=useState(initialGuess);

useEffect(()=>{
    if (currentGuess===gameNumber){
        onGameOver();
    }
},
[currentGuess,gameNumber,onGameOver]);

function nextGuessHandler(direction)
{
     if (
        
        (direction==='lower' && currentGuess<gameNumber) || 
        (direction==="greater" && currentGuess>gameNumber)
     ){
            Alert.alert("Don't lie!",'You know that its wrong...',[{text:'sorry!',style:'cancel'},
        ]);
            return;            
     }

    if(direction==='lower'){
        maxBoundary=currentGuess;
    }
    else{
        minBoundary=currentGuess+1;
    }
    console.log(minBoundary,maxBoundary);
    const newRndNumber= generateRandomBetween(minBoundary,maxBoundary,currentGuess);
    setCurrentGuess(newRndNumber);
}

return (
    <View style={styles.screen}>
        <Title>Opponent's guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
<Card>
  < InstructionText style={styles.instructionsSpace}>Higher or Lower</InstructionText>   
    <View style={styles.buttonsContainer}>
        <View style={styles.button}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
        </View>
        <View style={styles.button}>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
        </View>
    </View>
    
</Card>
<View>
    {/* Log Rounds   */}
</View>

</View>
);
}

export default GamesScreen;

const styles=StyleSheet.create({
    screen:{
        flex:1,
        padding:35,
        marginTop:35
    },
    buttonsContainer:{
        flexDirection:'row',
    },
    button:{
        flex:1
    },
    instructionsSpace:{
        marginBottom:50,
    },

});