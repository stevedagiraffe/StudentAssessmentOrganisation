import {StyleSheet} from 'react-native'


export default splitInfoCardStyle = (props) => StyleSheet.create({
    layout: {
        flex: props.flex,
        backgroundColor: props.backgroundColor,
        maxHeight: 300,
        justifyContent: 'flex-start',
    },
});