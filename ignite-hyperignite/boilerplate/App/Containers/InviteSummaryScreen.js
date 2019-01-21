import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  TextInput
} from "react-native";
import RoundedButton from "../Components/RoundedButton";
import { Images } from "../Themes";
// Styles
import styles from "./Styles/InviteSummaryScreenStyle";

class InviteSummaryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameplaceholdertext: "Name",
      passwordplaceholdertext: "Password",
      myemailaddressplaceholdertext: "My email address"
    };
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.topCenterSectionText}>Summary</Text>
            <Text style={styles.subCenterSectionText}>Our house is named</Text>
            <Text style={styles.topCenterSectionText}>Party Bus</Text>

            <Text style={styles.subCenterSectionText}>It's located at</Text>
            <Text style={styles.topCenterSectionText}>262 Queen St. W</Text>

            <Text style={styles.subCenterSectionText}>We keep it</Text>
            <Text style={styles.topCenterSectionText}>Cleaner than clean</Text>

          </View>
          <RoundedButton
            onPress={() => this.props.navigation.push("MainTabNavigator")}
            title="Go to the app"
          >
            Looks Great!
          </RoundedButton>
          <RoundedButton
            onPress={() => this.props.navigation.push("MainTabNavigator")}
            title="Go to the app"
          >
            Let's change some things
          </RoundedButton>
        </ScrollView>
      </View>
    );
  }
}
export default InviteSummaryScreen;
