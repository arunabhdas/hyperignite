import { createStackNavigator, createAppContainer } from 'react-navigation'
import InviteSummaryScreen from '../Containers/InviteSummaryScreen'
import InviteYourHousematesScreen from '../Containers/InviteYourHousematesScreen'
import YourHouseInfoScreen from '../Containers/YourHouseInfoScreen'
import YourInfoScreen from '../Containers/YourInfoScreen'
import JoinHouseScreen from '../Containers/JoinHouseScreen'
import LoginScreen from '../Containers/LoginScreen'
import OnboardingScreen from '../Containers/OnboardingScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  InviteSummaryScreen: { screen: InviteSummaryScreen },
  InviteYourHousematesScreen: { screen: InviteYourHousematesScreen },
  YourHouseInfoScreen: { screen: YourHouseInfoScreen },
  YourInfoScreen: { screen: YourInfoScreen },
  JoinHouseScreen: { screen: JoinHouseScreen },
  LoginScreen: { screen: LoginScreen },
  OnboardingScreen: { screen: OnboardingScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
