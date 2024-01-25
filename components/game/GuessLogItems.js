import { View ,Text,StyleSheet} from "react-native";
import color from "../constatnts/color";

function GuessLogItems({roundNumber,guess}){
    return(
        <View style={styles.ListItems}>
            <Text style={styles.textItems}>#{roundNumber}</Text>
            <Text style={styles.textItems}>Opponent's Guess:{guess}</Text>
        </View>
    );
}

export default GuessLogItems;

const styles=StyleSheet.create({
    ListItems:{
        borderColor:color.primary800,
        borderWidth:1,
        borderRadius:40,
        padding:12,
        marginVertical:8,
        backgroundColor:color.accent500,
        flexDirection:'row',
        justifyContent:"space-between",
        width:'100%',
        elevation:4
    },
    textItems:{
        fontFamily:'open-sans'
    }

});