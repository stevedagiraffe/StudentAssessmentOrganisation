import { StyleSheet } from 'react-native'


export default splitInfoCardStyle = (props) => StyleSheet.create({
    layout: {
        flex: props.flex,
        backgroundColor: props.backgroundColor,
        maxHeight: 300,
        justifyContent: 'flex-start',
    },
    /* Refuses to attach to buttons. Will probably convert to TouchableOpacity's in the future
    startBtn: {
        backgroundColor: 'green',
        flex: 50,
        maxHeight: 80,
        minWidth: 130
    },
    detailsBtn: {
        backgroundColor: 'blue',
        flex: 50,
        maxHeight: 80,
        minWidth: 130
    }*/
});