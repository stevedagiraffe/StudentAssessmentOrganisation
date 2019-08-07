import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
//import { actionCreators } from "../../Store/Reducers/Calendar";
import Styles from "./CalenderWindowStyle";
import Calendar from "./Calendar/Calendar"
import CalendarBottomBtns from "./CalendarBottomBtns/CalendarBottomBtns"
class CalendarWindow extends Component {

    nothing() {

    }
    render() {
        return (
            <View style={Styles.layout}>
                <View style={Styles.dateInfo}>

                </View>
                <Calendar />
                <CalendarBottomBtns
                    splitCount={2}
                    assignPress={this.nothing}
                    editPress={this.nothing}
                />
            </View>
        )
    }
}

export default connect(
    state => {
        return {
            calendar: state.calendar,
        }
    },
    dispatch => bindActionCreators({}, dispatch)
)(CalendarWindow);