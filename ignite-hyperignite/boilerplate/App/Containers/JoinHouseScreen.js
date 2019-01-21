import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView, TextInput } from 'react-native';
import RoundedButton from '../Components/RoundedButton';
import { Images } from '../Themes'
// Styles
import styles from './Styles/JoinHouseScreenStyle'

class JoinHouseScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'MYHOUSECODE' };
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
              Join a house
          </Text>
            <Text style={styles.sectionText}>
              Enter your House Code
          </Text>
            <TextInput
              style={{ height: 40, borderColor: 'white', borderWidth: 1, color: 'gray'}}
              onChangeText={(text) => this.setState({ text })}
              value={this.state.text}
            />
          </View>
          <RoundedButton onPress={() =>
            this.props.navigation.push('YourInfoScreen')
          } title="Join house"
          >
            Join house
        </RoundedButton>

        </ScrollView>
      </View>

    );
  }
}
export default JoinHouseScreen;

