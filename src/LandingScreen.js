import React from 'react';
import { ActivityIndicator,
    AsyncStorage,Button, Text, View} from "react-native";
import { NavigationActions, StackActions } from 'react-navigation';
import {AppStack} from '.././App';


export class LandingScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Landing Screen</Text>
            </View>
        );
    }
}



