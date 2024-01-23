import { useState } from 'react';
import { StyleSheet,ImageBackground,SafeAreaView} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import color from './components/constatnts/color';

import StartGameScreen from './screens/StartGameScreen';
import GamesScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [gameNumber, setGameNumber] = useState();
 const [gameIsOver,setGameIsOver]=useState(true);


  function pickedNumberHandler(pickedNumber) {
    setGameNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true)
  }


  let screen = <StartGameScreen onPickNum={pickedNumberHandler} />;

  if (gameNumber) {
    screen = <GamesScreen gameNumber={gameNumber} onGameOver={gameOverHandler}/>;
  }

  if (gameIsOver && gameNumber){
    screen=<GameOverScreen/>
  }


  return (
    <LinearGradient colors={[color.primary800,color.aceent500  ]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
rootScreen:{
  flex:1,

},
backgroundImage:{
  opacity:0.15
}

});

