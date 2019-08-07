import {StyleSheet} from 'react-native'

const dashboardStyles = StyleSheet.create({
    layout: {
        flexDirection: "column",
        flex: 1,
        justifyContent: 'space-between'
    },
    greeting: {

        flex: 10,
        fontSize: 30,
        textAlign: 'center',
    },
    upcoming: {
        flex: 3,
        fontSize: 20,
        
        
    },
    buttonSpace: {
        flex: 25,
        backgroundColor: 'gray',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },
    splitInfoCard: {
        flex: 35
    }
    
});



export default dashboardStyles;