import React from "react";
import { TouchableOpacity, View } from "react-native";
import { style } from './style'
import { Octicons } from "@expo/vector-icons";

export default({state,navigation} :any)=> {
    return (
        <View style={style.tabArea}> 
            <View style={style.BoxBottom}>
                <TouchableOpacity style={style.tabIten}>
                    <Octicons name="home" color={'white'} size={30}/>
                </TouchableOpacity>
            </View>  
        </View>
    )
    
}