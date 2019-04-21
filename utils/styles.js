import {StyleSheet, Platform, StatusBar} from "react-native";
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 0;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 24 : 50;
const MARGIN_BOTTOM = Platform.OS === 'ios' ? 10 : 0;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    navBarTitle:{
        fontFamily:'Avenir-Black',
        fontWeight: 'bold',
        fontSize:16,
        flex: 1,
        color:'#414f2f',
        textAlign:'center'
    },
    navBarRightButton:{
        fontFamily:'Avenir-Roman',
        fontSize:14,
        color:'#aaa333',
        textAlign:'right',
        marginRight:19
    },
    navBarLeftButton:{
        fontFamily:'Avenir-Roman',
        fontSize:14,
        color:'#ffffff',
        textAlign:'left',
        marginLeft:19
    },
    header:{
        marginTop: STATUSBAR_HEIGHT/2,
        height: APPBAR_HEIGHT,
        backgroundColor:'#0177c8',
        marginBottom: MARGIN_BOTTOM,
        borderBottomWidth: 0,
    },

});

