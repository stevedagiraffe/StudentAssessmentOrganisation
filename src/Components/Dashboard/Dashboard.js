import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import Styles from "./DashboardStyles"
import SplitInfoCard from "./SplitInfoCard/SplitInfoCard"
import { actionCreators } from "../../Store/Reducers/Dashboard"
import { bindActionCreators } from '../../../../../Users/sysadmin/AppData/Local/Microsoft/TypeScript/3.5/node_modules/redux';
class Dashboard extends Component {
    static navigationOptions = {
        title: 'Dashboard'
    };
    

    shouldComponentUpdate(nextProps, nextState) {
        if(this.props.upcomingSplit === nextState.upcomingSplit) return false;
        return true;
    }
    onStart = () => {
        this.props.navigation.navigate('Split_Session');
    }
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={Styles.layout}>
                <Text></Text>
                <SplitInfoCard
                    onStart={navigate('Split_Session')}
                    onDetails={navigate('Split_Details')}
                    minStart={this.props.items.splits[this.props.items.selectedSplit].minStart}
                    maxStart={this.props.items.splits[this.props.items.selectedSplit].maxStart}
                    backgroundColor={this.props.items.splits[this.props.items.selectedSplit].backgroundColor}
                />
                <Button
                    title="Gotonother"
                    onPress={() => navigate('Dashboard')}
                />
            </View>
        );
    }
}

export default connect(
    state => {
        return {
            dashboard: state.dashboard,
            items: null, //Event
        }
    },
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Dashboard);