import { StyleSheet,View } from "react-native";
import color from "../constatnts/color";

function Card({children}){
    return <View style={styles.inputContainer}>
{children}
    </View>;
}

export default Card;

const styles=StyleSheet.create({
    inputContainer:{
        justifyContent:'center',
        alignItems:'center',
        padding:16,
        marginTop:50,
        marginHorizontal:30,
        borderRadius:8,
        backgroundColor:color.primary700,
        elevation:8,
    }
});