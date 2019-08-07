import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';

export default dashboardBottomBtns = (props) => {
    return (
        <View style={props.spaceStyle}>
            <View style={{ flex: 80, justifyContent: 'space-evenly' }}>
                <TouchableOpacity
                    onPress={props.toCalendar}
                    style={{ backgroundColor: 'lightblue', flex: 50 }}
                >
                    <Text>Calendar</Text>
                </TouchableOpacity>
                <TouchableOpacity

                    onPress={props.toSubject}
                    style={{ backgroundColor: 'orange', flex: 50 }}
                >
                    <Text>Subjects</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={props.toSettings}
                style={{ backgroundColor: 'blue', flex: 20, }}
            >
                <Text>Settings</Text>
            </TouchableOpacity>

        </View>
    )
}

