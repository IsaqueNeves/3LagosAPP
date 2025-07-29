import React from "react";
import {MaterialIcons, Entypo } from "@expo/vector-icons";
import { style } from "./style";
import { Text, 
        View,
        TouchableOpacity } from "react-native";


export default function Menu() { 
    return ( 
        <View style={style.container}> 
            <View style={style.SelectProduct}>
                <TouchableOpacity style={style.botton}>
                    <Text style={style.textButton}>REVISAO</Text>
                    <MaterialIcons name="edit" size={30} color={'white'}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.botton}>
                    <Text style={style.textButton}>AGENDA</Text>
                    <MaterialIcons name="edit-calendar" size={30} color={'white'}/>
                    
                </TouchableOpacity>
               

            </View>
        </View>
    ); 
    
}

