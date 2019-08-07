import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements'
import Styles from "./SplitInfoCardStyle"

const splitInfoCard = (props) => {
    return (
        <View style={{flex: 2}}>
            <Text>Upcoming Split:</Text>
            <View style={Styles(props.backgroundColor).box}>
                <Text style={{flex: 1}}>{props.h1}</Text>
                <Text style={{flex: 1}}>{props.h2}</Text>
                <Text style={{flex: 1}}>Starts: {props.minStart}-{props.maxStart}</Text>
                <View style={{flex: 3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <Button
                        title={"Start"}
                        onPress={props.onStart}
                        buttonStyle={{backgroundColor: 'blue', flex: 1}}
                        />
                    <Button
                        title={"Details"}
                        onPress={props.onDetails}
                        buttonStyle={{backgroundColor: 'blue', flex: 1}}
                        />
                </View>
            </View>
        </View>
    );
}

export default splitInfoCard;