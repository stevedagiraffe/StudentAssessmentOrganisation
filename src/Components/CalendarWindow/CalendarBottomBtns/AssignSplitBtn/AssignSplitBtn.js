import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Styles from "./AssignSplitBtnStyle"

const assignSplitBtn = (props) => {

    //No point showing the unassigned split counter if there is none
    const splitCounter = props.splitCount > 0 ?
        (
            <Text style={Styles.splitCounter}>{props.splitCount}</Text>
        ) : null;

    return (
        <View style={Styles.layout}>
            <Button title="Assign Splits"
                style={Styles.assignBtn}
                onPress={props.onPress}
            />
            {splitCounter}
        </View>
    )
}

export default assignSplitBtn;