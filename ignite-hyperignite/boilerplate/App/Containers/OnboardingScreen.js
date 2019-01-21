import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    ScrollView,
    } from 'react-native';
import RoundedButton from '../Components/RoundedButton'
import { Images } from '../Themes'
// Styles
import styles from './Styles/OnboardingScreenStyles'

class OnboardingScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
          </View>

          <View style={styles.section} >

            <Text style={styles.sectionText}>
              Welcome to Onboarding
            </Text>
          </View>
          <RoundedButton onPress={() => 
              this.props.navigation.push('LoginScreen')
          } title="Go to the app"
          >
          Go to Login 
          </RoundedButton>

          
        </ScrollView>
      </View>
    );
  }
}
export default OnboardingScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});