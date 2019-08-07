import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements'
import Styles from "./SplitInfoCardStyle"


const splitInfoCard = (props) => {
    const style = Styles(props);
    return (
            <View style={style.layout}>
                <Text h1 style={{flex: 12}}>{props.h1}</Text>
                <Text h2 style={{flex: 12}}>{props.h2}</Text>
                <Text style={{flex: 10}}>Starts: {props.minStart}-{props.maxStart}</Text>
                <View style={{flex: 30, flexDirection: 'row',  justifyContent: 'space-evenly'}}>
                    <Button
                        title={"Start"}
                        onPress={props.onStart}
                        buttonStyle={{backgroundColor: 'green', flex: 50, maxHeight: 80, minWidth: 130}}
                    />
                    <Button
                        title={"Details"}
                        onPress={props.onDetails}
                        buttonStyle={{backgroundColor: 'blue', flex: 50, maxHeight: 80, minWidth: 130}}
                    />
                </View>
            </View>
    );
}

export default splitInfoCard;