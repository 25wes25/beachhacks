import React from 'react';
import { ActivityIndicator,
    AsyncStorage,TouchableOpacity, Text, View} from "react-native";
import { NavigationActions, StackActions } from 'react-navigation';

export class LandingScreen extends React.Component {

    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Landing Screen</Text>
                <TouchableOpacity
                    style={{height: 40, width: 200, backgroundColor: '#123456'}}
                    onPress={()=>this.props.navigation.reset([NavigationActions.navigate({routeName: 'MainScreen', params:{}})], 0)}>
                    <View/>
                </TouchableOpacity>
            </View>
        );
    }
}
