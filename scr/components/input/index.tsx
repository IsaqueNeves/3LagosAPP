import React, {forwardRef, Fragment, LegacyRef} from "react";

import {    View, 
            Text, 
            TextInput,
            TextInputProps,  
            TouchableOpacity} from "react-native";
import {FontAwesome, MaterialIcons, Octicons, Entypo} from "@expo/vector-icons";
import {style} from "./style";
import { themes } from "../../global/themes";


type IconComponent =    React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                        React.ComponentType<React.ComponentProps<typeof FontAwesome>> | 
                        React.ComponentType<React.ComponentProps<typeof Octicons>> | 
                        React.ComponentType<React.ComponentProps<typeof Entypo>>;
                    

type Props = TextInputProps & {
    IconLeft?: IconComponent, 
    IconRight?: IconComponent,
    iconLeftName?: string, 
    iconRightName?: string,
    title?: string, 
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void 
}


export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput>  | null)=>{
    const {IconLeft,IconRight,iconLeftName,iconRightName,title,onIconLeftPress,onIconRightPress, ...rest} = Props 

    const calcularSizeWidth = () => {
        if (IconRight && IconLeft){ 
            return '80%'
        } else if (IconLeft || IconRight){
            return '90%'
        } else {
            return '100%'
        }}
    const clacularPaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 0;
        } else if (IconLeft || IconRight) { 
            return 10; 
        } else { 
            return 20;
        }

    }
    return (
    <Fragment>
        <Text style={style.titleinput}>{title}</Text>
        <View style={[style.Boxinput, {padding:clacularPaddingLeft()}]}>
            {IconLeft && iconLeftName && (
            <TouchableOpacity onPress={onIconLeftPress}>
                <IconLeft name={iconLeftName as any} size= {20} color={themes.Colors.background} style={style.icon} />
            </TouchableOpacity>
            )}

            <TextInput style={[
                style.input, {width: calcularSizeWidth()}
            ]}
            {...rest} 
            />

            {IconRight && iconRightName && (
                <TouchableOpacity onPress={onIconRightPress}>
                    <IconRight name={iconRightName as any} size= {20} color={themes.Colors.background} style={style.icon} />
                </TouchableOpacity>
            )}   
        </View>
    </Fragment>
    ) 
    
})