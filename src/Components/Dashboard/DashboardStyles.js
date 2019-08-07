import {StyleSheet} from 'react-native'

const dashboardStyles = StyleSheet.create({
    layout: {
        flexDirection: "column",
        flex: 1,
        justifyContent: 'space-between'
    },
    greeting: {
        flex: 5
    },
    upcoming: {
        flex: 2,
    },
    buttonSpace: {
        flex: 10,
        backgroundColor: 'gray',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    }
    
});



export default dashboardStyles;