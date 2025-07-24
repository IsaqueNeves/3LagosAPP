import React, {forwardRef, Fragment} from "react";

import {    View, 
            Text, 
            TextInput,  } from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import {style} from "./style";
import { themes } from "../../global/themes";

export const Input = forwardRef(()=>{


    return (
        <Fragment>
        <Text style={style.titleinput}>Usurio :</Text>
        <View style={style.Boxinput}>
            <TextInput style={style.input}
            />

                <MaterialIcons 
                    name="person" size={24} color={themes.Colors.background} 
                />
        </View>
        </Fragment>
    ) 
    
})