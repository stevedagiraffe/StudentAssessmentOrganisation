import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../../Store/Reducers/Calendar";

class CalendarWindow extends Component {

    render() {
        return null;
    }
}

export default connect(
    state => state.calendar,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(CalendarWindow);