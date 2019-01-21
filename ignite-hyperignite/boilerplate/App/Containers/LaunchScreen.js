import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import LaunchOnboardingScreenButton from '../../App/Components/LaunchOnboardingScreenButton'
import RoundedButton from '../Components/RoundedButton'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >

            <Text style={styles.sectionText}>
              Welcome to Broccoli
            </Text>
          </View>
          <RoundedButton onPress={() => 
              this.props.navigation.push('LoginScreen')
          } title="Go to the app"
          >
          Go to Login 
          </RoundedButton>
          <RoundedButton onPress={() => 
              this.props.navigation.push('OnboardingScreen')
          } title="Go to the app"
          >
          Go to Onboarding
          </RoundedButton>
          <DevscreensButton />
          
        </ScrollView>
      </View>
    )
  }
}
