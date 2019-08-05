import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class Dashboard extends Component {
    static navigationOptions = {
        title: 'Dashboard'
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View>
                <Text></Text>
                <Button
                    title="Gotonother"
                    onPress={() => navigate('Dashboard')}
                />
            </View>
        );
    }
}

export default connect()(Dashboard);