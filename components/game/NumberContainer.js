import { View,Text,StyleSheet } from "react-native";
import color from "../constatnts/color";

function NumberContainer({children}){
    return(
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    );
}

export default NumberContainer;

const styles=StyleSheet.create({
container:{
    borderWidth:4,
    borderColor:'white',
    padding:24,
    margin:24,
    borderRadius:8,
    alignItems:'center',
    justifyContent:'center',
},
numberText:{
    fontSize:36,
    color:color.aceent500
}


});