import React, { Component } from 'react'
import { View } from 'react-native'
import { Text, Button } from 'react-native-elements';
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
        if (this.props.upcomingSplit === nextState.upcomingSplit) return false;
        return true;
    }
    onStart = () => {
        this.props.navigation.navigate('Split_Session');
    }
    render() {

        const { navigate } = this.props.navigation;
        const currentSplit = this.props.items.splits[this.props.items.selected.split];
        const goalName = this.props.items.goals[currentSplit.goal].name;



        return (
            <View style={Styles.layout}>
                <Text h1 style={Styles.greeting}>Hi, Bob!</Text>
                <Text style={Styles.upcoming}>Upcoming Split:</Text>
                <SplitInfoCard
                    flex={30}
                    h1={currentSplit.name}
                    h2={goalName}
                    onStart={navigate('Split_Session')}
                    onDetails={navigate('Split_Details')}
                    minStart={currentSplit.minStart}
                    maxStart={currentSplit.maxStart}
                    backgroundColor={currentSplit.backgroundColor}
                />
                <View style={Styles.buttonSpace}>
                    <View style={{ flex: 80, justifyContent: 'space-evenly' }}>
                        <Button
                            title="Gotonother"
                            onPress={() => navigate('Calendar')}
                            style={{ backgroundColor: 'lightblue', flex: 50}}

                        />
                        <Button
                            title="Gotonother"
                            onPress={() => navigate('Calendar')}
                            style={{ backgroundColor: 'lightblue', flex: 50 }}

                        />

                    </View>
                    <Button
                        title={"Options"}
                        style={{backgroundColor: 'blue', flex: 20, }}
                    />

                </View>

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