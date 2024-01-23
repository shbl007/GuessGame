import { Text,StyleSheet, View } from "react-native";

function GameOverScreen(){
    return(
        <View style={styles.container}>
         <Text style={styles.text}>Game Over!!</Text>
         </View>
    )
}

export default GameOverScreen;

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:20,
        marginTop:50,
        borderWidth:3,
        justifyContent:'center',
        alignItems:'center'

    },
    text:{
        fontSize:56,
        fontWeight:'bold'
    }

});