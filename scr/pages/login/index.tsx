import React from "react";

import { 
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
 } from "react-native";
import Logo from "../../../assets/logo.png";
import { style } from "./style";

 export default function Login() { 
    return (

        <View style={style.container}> 
            <View style={style.boxtop}>

               <Image source={Logo}
                style={style.logo}
                 resizeMode="contain"/>

                <Text style={style.logoText}>3 Lagos Ecossistemas</Text>    
            </View>



            <View style={style.boxmiddle}>

                <Text style={style.titleinput}>Usuario :</Text>
                <View style={style.Boxinput}>
                <TextInput />
                 </View>
                <Text style={style.titleinput}>Senha :</Text>
                 <View style={style.Boxinput}>
                <TextInput />
                 </View>

            </View>
            <View style={style.boxbottom}>
               <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
 }