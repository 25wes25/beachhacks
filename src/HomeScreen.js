import React from 'react';
import {Button, Text, View} from "react-native";
import {LandingScreen} from "./LandingScreen";

export class HomeScreen extends React.Component {
    render(){
        return(
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

