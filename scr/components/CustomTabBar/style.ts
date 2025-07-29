import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container:{

    },
    tabArea:{
        flexDirection:'row', 
        height: 80,
        justifyContent:'space-around'
    },
    tabIten:{
        flex: 1, 
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 30
    },
    BoxBottom:  {
        backgroundColor: themes.Colors.border,
        width: '100%',
        height: 100,
        borderRadius: 25
    },
      

})