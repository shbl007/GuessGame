import { StyleSheet ,Text} from "react-native";
import color from "../constatnts/color";

function InstructionText({children ,style}){
return <Text style={[styles.instructionText, style]}>
{children}
</Text>;

}
export default InstructionText;

const styles=StyleSheet.create({
    instructionText:{
        fontFamily:'open-sans',
        color:color.accent500,
        fontSize:24
    },

});