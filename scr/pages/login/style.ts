import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: themes.Colors.background,
    },
    boxtop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
       // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',

    },         
    boxmiddle: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
       // backgroundColor: 'green',
    },
    boxbottom: {
       height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',   
        justifyContent: 'center',
        //backgroundColor: 'blue',
    },
    logo: {
        width: 200,
        height: 200,    
       justifyContent: 'center',
        
        borderRadius: 150,
        borderWidth: 7,
        borderColor: themes.Colors.primary,
        marginTop: 10,
        backgroundColor: 'white',
    },
    logoContain: {
        
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        marginTop: 20,
        textAlign: 'center',
        padding: 10,
    },

    titleinput: {
        marginLeft: 30,
        color: 'white',
        marginTop:15,
        fontSize: 20,
        fontWeight: 'bold',
    },
    Boxinput:{ 
        
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 25,
        marginRight: 25,
        borderWidth: 4 ,
        borderColor: themes.Colors.primary,
        backgroundColor: 'white',
        borderRadius: 25,
        margin: 10,
        paddingHorizontal: 10,

    }
}); 