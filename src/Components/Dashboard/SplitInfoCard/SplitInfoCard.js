import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements'
import Styles from "./SplitInfoCardStyles"

const splitInfoCard = (props) => {
    return (
        <View>
            <Text>Upcoming Split:</Text>
            <View style={Styles(props.backgroundColor).box}>
                <Text>{props.h1}</Text>
                <Text>{props.h2}</Text>
                <Text>Starts: {props.minStart}-{props.maxStart}</Text>
                <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <Button
                        title={"Start"}
                        onPress={props.onStart}
                        buttonStyle={{color: 'blue'}}
                        />
                    <Button
                        title={"Details"}
                        onPress={props.onDetails}
                        buttonStyle={{color: 'blue'}}
                        />
                </View>
            </View>
        </View>
    );
}

export default splitInfoCard;