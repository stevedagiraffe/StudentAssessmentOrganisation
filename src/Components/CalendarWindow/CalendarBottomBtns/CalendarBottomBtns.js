import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import AssignSplitBtn from "./AssignSplitBtn/AssignSplitBtn"
const calendarBottomBtns = (props) => {
    return (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
            <AssignSplitBtn
                splitCount={props.splitCount}
                onPress={props.assignPress}
            />
            <Button
                title="Edit"
                style={{flex: 1, backgroundColor: 'blue', borderColor: 'gray'}}
                onPress={props.editPress}
            />
        </View>
    );
}

export default calendarBottomBtns;