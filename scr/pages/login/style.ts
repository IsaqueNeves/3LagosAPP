import { Dimensions, StyleSheet } from "react-native";
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
        justifyContent: 'center',
       // backgroundColor: 'green',
    },
    boxbottom: {
       height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',   
        //justifyContent: 'center',
        //backgroundColor: 'blue',
    },
    logo: {
        width: 200,
        height: 200,    
       justifyContent: 'center',
        
        borderRadius: 150,
        borderWidth: 4,
        borderColor: themes.Colors.primary,
        marginTop: 10,
        backgroundColor: 'white',
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
        margin: 5,
        paddingHorizontal: 20,
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
    },
    button: {
        marginTop: 20,
        width: 200, 
        height: 75,
        backgroundColor: themes.Colors.primary,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },

    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginRight: 15,
    }

}
);