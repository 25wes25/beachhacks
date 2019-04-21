import React, {Component} from 'react';
import {Text, View, ImageBackground} from "react-native";


export class LoginScreen extends Component {
    render(){
        return(
            <ImageBackground style = {{
                flex: 1,
                justifyContent: 'space-evenly',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}
            source = {require('./src/assets/loginscreen/loginBackground.gif')}
            >
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Profile Screen</Text>
            </View>
            </ImageBackground>
        );
    }
}
