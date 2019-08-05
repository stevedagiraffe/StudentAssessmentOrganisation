/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Dashboard from "../Dashboard/Dashboard";
import Store from "../../Store/Store"

const RootNavigator = createStackNavigator({
  Dashboard: {screen: Dashboard},
});

const Navigation = createAppContainer(RootNavigator);

export default class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    );
  }
}


