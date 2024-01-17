import { View,Text,Pressable,StyleSheet } from "react-native"



function PrimaryButton({children ,onPress}){

return(
    <View style={styles.buttonOuterContainer}>
    <Pressable
     style={styles.buttonInnerContainer}
     onPress={onPress}
     android_ripple={{color:'#640223'}}
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
        backgroundColor:'#72063c', 
        paddingVertical:8,
        paddingHorizontal:14,
        elevation:6,
    },
    buttonText:{
        color:'white',
        textAlign:"center"
    }
});