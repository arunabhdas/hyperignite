import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TextInput } from 'react-native';
import RoundedButton from '../Components/RoundedButton';
import { Images } from '../Themes'
// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameplaceholdertext: "Name",
      myemailaddressplaceholdertext: "email@email.com",
      passwordplaceholdertext: "************",
    };
  }
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
             Sign In
          </Text>
          <Text style={styles.subSectionText}>Email</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "white",
                borderWidth: 1,
                color: "gray"
              }}
              onChangeText={text => this.setState({ text })}
              value={this.state.myemailaddressplaceholdertext}
            />
            <Text style={styles.subSectionText}>Password</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "white",
                borderWidth: 1,
                color: "gray"
              }}
              onChangeText={text => this.setState({ text })}
              value={this.state.passwordplaceholdertext}
            />
        </View>
        <RoundedButton onPress={() => 
            this.props.navigation.push('JoinHouseScreen')
        } title="Go to the app"
        >
        Let me in!
        </RoundedButton>
        
      </ScrollView>
    </View>

    );
  }
}
export default LoginScreen;

