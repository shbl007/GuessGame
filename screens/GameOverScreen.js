import { StyleSheet, View ,Image,Text} from "react-native";
import Title from "../components/UI/Title";
import color from "../components/constatnts/color";
import PrimaryButton from "../components/UI/PrimaryButtons";

function GameOverScreen( {roundsNumber,userNumber,onStartNewGame}){
    return(
        <View style={styles.rootContainer}>
        <Title >Game Over!!</Title>
        <View style={styles.ImageContainer}>
         <Image
         style={styles.image}
          source={require('../assets/images/success.png')}/>
         </View>
         <Text style={styles.summaryText}>
            Your phone needs <Text style={styles.highlights}>{roundsNumber} </Text>
             rounds to guess the number <Text style={styles.highlights}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
     </View>
    )
}

export default GameOverScreen;

const styles=StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:"center",
    },


    ImageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:color.primary800,
        overflow:'hidden',
        margin:36,
    },
    image:{
        width:'100%',
        height:'100%',
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        marginBottom:24,
    }, 
    highlights:{
        fontFamily:'open-sans-bold',
        color:color.primary500
    }

});