import { Text ,StyleSheet} from "react-native";
import color from "../constatnts/color";

function Title({children}){
return(
<Text style={styles.title}>{children}</Text>  
);
}

export default Title;
const styles=StyleSheet.create({
    title:{
        
            fontSize:24,
            fontWeight:"bold",
            color:'white',
            textAlign:"center",
            borderWidth:2,
            borderColor:color.accent500,
            padding:12,
            borderRadius:8,

    }
});