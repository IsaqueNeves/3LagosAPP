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
import {MaterialIcons, Entypo } from "@expo/vector-icons";
import { themes } from "../../global/themes";
import { Octicons } from "@expo/vector-icons";
import { Input } from "../../components/input";

import { useNavigation, NavigationProp } from "@react-navigation/native";


export default function Login() {

    const [user, setUser] = React.useState('');
    const [showPassword, setShowPassword] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);
    const navigation = useNavigation<NavigationProp<any>>();

    

       async function getLogin() {
                try { 

                    if (!user || !password) {
                        return Alert.alert("Preencha os campos!");  

                    
                    } 
                    navigation.navigate("BottomRoutes")
                    
                } 
                catch (error) {
                        console.log( error); }   
                
            
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

                

                    <Input 
                        value={user}
                        onChangeText={setUser}
                        title="Usuario: "
                        IconRight={MaterialIcons}
                        iconRightName="person"

                    />
                    <Input
                        value={password}
                        onChangeText={setPassword}
                        title="Senha: "
                        IconRight={Entypo}
                        iconRightName={showPassword?"eye-with-line":"eye"}
                        secureTextEntry={!showPassword}
                        onIconRightPress={()=>setShowPassword(!showPassword)}
                        
                    />
                 

            </View>

            <View style={style.boxbottom}>g
                
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
