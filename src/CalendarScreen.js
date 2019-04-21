import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from "react-native";


export class CalendarScreen extends React.Component {
    render(){
        return(
            <FlatList
                data={[
                    {   eventMonth: "April",
                        eventDay: "20",
                        eventWeekDay: "SAT",
                        eventTitle: "Coachella",
                        eventLocation: "Coachella Valley, CA",
                        eventLogo: "",},
                    {   eventMonth: "July",
                        eventDay: "30",
                        eventWeekDay: "SUN",
                        eventTitle: "Val's Birthday",
                        eventLocation: "Bellflower, CA",
                        eventLogo: "",},
                ]}
                renderItem={({item}) =>
                    <View style={styles.eventCard}>
                        <View style={styles.eventDateBox}>
                            <Text style={styles.eventMonth}>{item.eventMonth}</Text>
                            <Text style={styles.eventDay}>{item.eventDay}</Text>
                            <Text style={styles.eventWeekDay}>{item.eventWeekDay}</Text>
                        </View>
                        <View style={styles.eventTitleBox}>
                            <Text style={styles.eventTitleText}>{item.eventTitle}</Text>
                            <View style={styles.eventSpacer}/>
                            <Text style={styles.eventLocation}>{item.eventLocation}</Text>
                        </View>
                        <View style={styles.eventLogoBox}>
                            <View style={{flex: 1, backgroundColor: "#123456"}}/>
                        </View>
                    </View>
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    eventCard: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#999999",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 5,
    },
    eventDateBox: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
    },
    eventTitleBox: {
        flex: 1,
        flexGrow: 4,
        flexDirection: "column",
        justifyContent: 'center',
    },
    eventLogoBox: {
        flex: 1,
    },
    eventMonth: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign:'center',
    },
    eventDay: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign:'center',
    },
    eventWeekDay: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign:'center',
    },
    eventTitleText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign:'center',
    },
    eventSpacer: {
        backgroundColor: "#444444",
        height: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    eventLocation: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign:'center',
    }
});
