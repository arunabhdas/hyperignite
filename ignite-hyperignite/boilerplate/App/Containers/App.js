import '../Config'
import DebugConfig from '../Config/DebugConfig'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import RootContainer from './RootContainer'
import createStore from '../Redux'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import LaunchScreen from './LaunchScreen';
import OnboardingScreen from './OnboardingScreen';
import LoginScreen from './LoginScreen';
import JoinHouseScreen from './JoinHouseScreen';
import YourInfoScreen from './YourInfoScreen';
import YourHouseInfoScreen from './YourHouseInfoScreen';
import InviteYourHousematesScreen from './InviteYourHousematesScreen';
import InviteSummaryScreen from './InviteSummaryScreen';

import MainTabNavigator from '../Screens/MainTabNavigator';

// create our store
const store = createStore()

const NavStack = createStackNavigator(
  {
  LaunchScreen: { screen: LaunchScreen },
  OnboardingScreen: { screen: OnboardingScreen },
  LoginScreen: { screen: LoginScreen },
  JoinHouseScreen: { screen: JoinHouseScreen },
  YourInfoScreen: { screen: YourInfoScreen },
  YourHouseInfoScreen: { screen: YourHouseInfoScreen },
  InviteYourHousematesScreen: { screen: InviteYourHousematesScreen },
  InviteSummaryScreen: { screen: InviteSummaryScreen },
  MainTabNavigator: { screen: MainTabNavigator }
  },
  {
    initialRouteName: 'LaunchScreen',
    headerMode: 'none'
  } 
);
const App = createAppContainer(NavStack);
export default App;
/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We create our Redux store here, put it into a provider and then bring in our
 * RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}
 */

// allow reactotron overlay for fast design in dev mode
/*
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
*/