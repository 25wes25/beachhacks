import React from 'react';
import {ImageBackground, ScrollView, TouchableOpacity, StyleSheet, Button, Text, View, Image} from "react-native";
import {LandingScreen} from "./LandingScreen";
import {FlatGrid} from 'react-native-super-grid';

export class HomeScreen extends React.Component {
    render(){

        //query to get 4 next events
        const items = [
            { name: 'ESCAPE: Psycho Circus', date: 'Oct 28, 2019', location: 'San Bernadino, CA', image: './assets/Home/coachella.jpg' }, { name: 'Electric Zoo', date: 'Oct 28, 2019', location: 'San Bernadino, CA', image: './assets/Home/coachella.jpg' },
            { name: 'EDC 2019', date: 'Oct 28, 2019', location: 'San Bernadino, CA', image: './assets/Home/coachella.jpg' }, { name: 'Hard Summer', date: 'Oct 28, 2019', location: 'San Bernadino, CA', image: './assets/Home/coachella.jpg' },
        ];


        return(
            <ScrollView>
                <View style={styles.col}>

                    <View style={styles.picture}>
                        <Text style ={styles.upcomingEvents}>Upcoming Events</Text>
                    </View>
                    <View style={styles.pictureBox}>

                        <Image
                            resizeMode="contain"
                            source={require('./assets/Home/coachella.jpg')}
                            style={styles.picture}
                            />

                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'stretch',
                    }}>
                        <View style={{height: 100, backgroundColor: 'beige'}}>
                            <Text style ={styles.upcomingEvents}>C O A C H E L L A </Text>
                        </View>
                        <View style={{height: 100, backgroundColor: 'blue'}}>
                            <Text style ={styles.upcomingEvents}>T E S T</Text>
                        </View>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'stretch',
                    }}>

                        <View style={{
                            flex: 1,
                            marginLeft: 5,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'stretch',
                        }}>

                            <View style={{height: 100, backgroundColor: 'gray'}}>
                                <Image
                                    source={require('./assets/Home/profilepicture.jpg')}
                                    style={{width: 100, height: 100, borderRadius: 100/ 2}}
                                />
                            </View>
                            <View style={{height: 100, backgroundColor: 'blue'}}>
                                <Text style ={styles.upcomingEvents}>P R O F I L E </Text>
                            </View>

                        </View>

                        <View style={{height: 100, marginRight: 5, backgroundColor: 'beige'}}>
                            <Text style ={styles.upcomingEvents}>T E S T</Text>
                        </View>

                    </View>

                    <View style={{height: 60, marginTop:10, marginLeft: 10, marginRight: 10, backgroundColor: 'beige'}}>
                        <Text style ={styles.upcomingEvents}>Explore New Events</Text>
                    </View>

                    <FlatGrid
                        itemDimension={130}
                        items={items}
                        style={styles.gridView}
                        // staticDimension={300}
                        // fixed
                        // spacing={20}
                        renderItem={({ item, index }) => (

                            <TouchableOpacity onPress={() => this.handleClick(item.name)}>

                                <View style={[styles.itemContainer, { backgroundColor: '#fff333'}]}>

                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemDate}>{item.date}</Text>
                                    <Text style={styles.itemLocation}>{item.location}</Text>
                                </View>
                            </TouchableOpacity>

                        )}
                    />
                </View>
            </ScrollView>


        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'contain'
    },
    col:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    upcomingEvents: {
        fontFamily: 'KGSummerSunshine',
        fontSize: 25,
        color: 'black',
        textAlign:'left',

    },
    pictureBox: {
        height: 200,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'steelblue'
    },
    picture: {
        flex:1,
        resizeMode: 'contain',
        height: undefined,
        width: undefined
    },
    title:{
        height: 60,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'beige'
    },
    //GRID SHIT
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemDate: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    itemLocation: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },

});

