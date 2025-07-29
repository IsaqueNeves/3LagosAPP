import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
      container: { 
        flex: 1,
        padding: 10,
        paddingTop: 50,
        paddingBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.Colors.background,
    },
    SelectProduct:{ 
        width: '100%',
    },
    botton:{
      alignItems: 'center',
      flexDirection: 'row',
      height: 60,
      backgroundColor: themes.Colors.border,  
      borderRadius: 15,
      marginTop: 15,
      marginLeft: 25,
      marginRight: 25,
      paddingHorizontal: 30
    },
    textButton:{
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 35,   
      marginRight: 100
    }
    
})