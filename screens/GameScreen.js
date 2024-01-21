import { Text, View ,StyleSheet} from "react-native";
import Title from "../components/Title";

function GamesScreen(){

return (
    <View style={styles.screen}>
        <Title>Opponent's guess</Title>
<View>
    <Text>Higher or Lower  </Text>
    {/* + - */}
    
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