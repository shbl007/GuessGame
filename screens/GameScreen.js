import { Text, View ,StyleSheet, Alert} from "react-native";
import Title from "../components/UI/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButtons";
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
<View>
    <Text>Higher or Lower  </Text>
    <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
    </View>
    
</View>
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
    }

});