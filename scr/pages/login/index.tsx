import React from "react";


import { 
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity, 
    Alert,
    ActivityIndicator
 } from "react-native";

import Logo from "../../../assets/logo.png";
import { style } from "./style";
import {MaterialIcons} from "@expo/vector-icons";
import { themes } from "../../global/themes";
import { Octicons } from "@expo/vector-icons";
import { Input } from "../../components/input";


export default function Login() {
    const [user, setUser] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

       async function getLogin() {
                try { 

                    if (!user || !password) {
                        return Alert.alert("Preencha os campos!");  }

                    setTimeout(() => {
                        if (user === "admin" && password === "123456") {    
                        Alert.alert("Login realizado com sucesso!");
                        setIsLoading(false);
                    } else {
                        Alert.alert("Usuário ou senha inválidos!");
                    }
                    }, 1000);




                } 
                catch (error) {
                        console.log( error); }   
                
                finally{
                    setIsLoading(false)
                }
            
        };

        return (
        <View style={style.container}> 
            <View style={style.boxtop}>

               <Image source={Logo}
                style={style.logo}
                 resizeMode="contain"/>

                <Text style={style.logoText}>3 Lagos Ecossistemas</Text>    
            </View>



            <View style={style.boxmiddle}>

                

                    <Input />
                

            </View>

            <View style={style.boxbottom}>
                
               <TouchableOpacity style={style.button} onPress={() =>{getLogin()}}>
                {
                    isLoading ? 
                        <ActivityIndicator color={'#fff'} size="small" />
                    :
                    <Text style={style.buttonText}>Entrar</Text>
                }
                    
                    <Octicons name="sign-in" size={24} color="white" />
                </TouchableOpacity>
            </View>

        </View>
        );
}               
