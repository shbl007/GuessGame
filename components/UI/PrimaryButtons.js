import { View,Text,Pressable,StyleSheet } from "react-native"
import color from "../constatnts/color";

function PrimaryButton({children ,onPress}){

return(
    <View style={styles.buttonOuterContainer}>
    <Pressable
     style={styles.buttonInnerContainer}
     onPress={onPress}
     android_ripple={{color:color.primary600}}
     >
        <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
);
}

export default PrimaryButton;

const styles=StyleSheet.create({
    buttonOuterContainer:{
        borderRadius:28,
        margin:4,
        overflow:'hidden'

    },
    buttonInnerContainer:{
        backgroundColor:color.primary500, 
        paddingVertical:8,
        paddingHorizontal:14,
        elevation:6,
    },
    buttonText:{
        color:'white',
        textAlign:"center"
    }
});