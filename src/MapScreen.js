import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';


export class MapScreen extends React.Component {
    onPress = () => {
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "black",}}>
                <View style={{flex: 1, alignItems: "flex-start", justifyContent: "flex-start"}}>
                    <Text style={{
                        color: 'white',
                        fontSize: 32,
                        fontWeight: 'bold',
                        textAlignVertical: 'center',
                        textAlign: 'left',
                        margin: 4,
                    }}>COACHELLA</Text>
                </View>
                <View style={{flex: 6, alignItems: "center", justifyContent: "center"}}>
                    <MapView
                        initialRegion= {{
                            latitude: 42.882004,
                            longitude: 74.582748,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421
                        }}
                    />
                </View>
                <View style={{flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row",}}>
                    <TouchableOpacity onPress={this.onPress}
                                      style={{flex: 1, backgroundColor: "#db7093", width: 80, marginHorizontal: 4,}}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlignVertical: 'center',
                            textAlign: 'center',
                            margin: 4,
                        }}>STAGES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress}
                                      style={{flex: 1, backgroundColor: "#db7093", width: 80, marginHorizontal: 4,}}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlignVertical: 'center',
                            textAlign: 'center',
                            margin: 4,
                        }}>FOOD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.onPress}
                                      style={{flex: 1, backgroundColor: "#db7093", width: 80, marginHorizontal: 4,}}>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlignVertical: 'center',
                            textAlign: 'center',
                            margin: 4,
                        }}>AMENITIES</Text>
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
}

