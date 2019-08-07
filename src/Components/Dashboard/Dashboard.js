import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import Styles from "./DashboardStyles"
import SplitInfoCard from "./SplitInfoCard/SplitInfoCard"
//import { actionCreators } from "../../Store/Reducers/Dashboard"
import { bindActionCreators } from 'redux'
class Dashboard extends Component {
    static navigationOptions = {
        title: "Dashboard"
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
        const currentSplit = this.props.items.splits[this.props.items.selected.split];

        return (
            <View style={Styles.layout}>
                <Text>Current: {currentSplit.name}</Text>
                <SplitInfoCard
                    onStart={navigate('Split_Session')}
                    onDetails={navigate('Split_Details')}
                    minStart={currentSplit.minStart}
                    maxStart={currentSplit.maxStart}
                    backgroundColor={currentSplit.backgroundColor}
                />
                <Button
                    title="Gotonother"
                    onPress={() => navigate('Calendar')}
                />
            </View>
        );
    }
}

export default connect(
    state => {
        return {
            dashboard: state.dashboard,
            items: state.itemDatabase, //Event
        }
    },
    dispatch => bindActionCreators({}, dispatch)
)(Dashboard);