import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import Styles from "./DashboardStyles"
import SplitInfoCard from "./SplitInfoCard/SplitInfoCard"
class Dashboard extends Component {
    static navigationOptions = {
        title: 'Dashboard'
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={Styles.layout}>
                <Text></Text>
                <SplitInfoCard
                
                 />
                <Button
                    title="Gotonother"
                    onPress={() => navigate('Dashboard')}
                />
            </View>
        );
    }
}

export default connect()(Dashboard);