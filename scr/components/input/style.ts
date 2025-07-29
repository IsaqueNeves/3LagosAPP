import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
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
         input: {
               height: 50,
                flex: 1,
                paddingHorizontal: 20,
                fontSize: 18,
                //backgroundColor: 'black',
                marginRight: 25,
                borderRadius: 25,
                width: '120%',
                //color: 'black',
                marginLeft: -24,
                fontWeight: 'bold',
                color: themes.Colors.background,
         },

                titleinput: 
                {
                marginLeft: 30,
                color: 'white',
                marginTop:15,
                fontSize: 20,
                fontWeight: 'bold',
                },
                
                icon: 
                {
                width : '100%'
                },
                
})