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
import styles from "./Styles/InviteYourHousematesScreenStyle";

class InviteYourHousematesScreen extends Component {
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
            <Text style={styles.topSectionText}>Invite your housemates</Text>
            <Text style={styles.subSectionText}>Housemate email</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: "white",
                borderWidth: 1,
                color: "gray"
              }}
              onChangeText={text => this.setState({ text })}
              value={this.state.nameplaceholdertext}
            />
            <Text style={styles.subSectionText}>Housemate email</Text>
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
            <Text style={styles.subSectionText}>Housemate email</Text>
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
            <Text style={styles.subSectionText}>+ Add a housemate</Text>
          </View>
          <RoundedButton
            onPress={() => this.props.navigation.push("InviteSummaryScreen")}
            title="Go to the app"
          >
            Send email
          </RoundedButton>
        </ScrollView>
      </View>
    );
  }
}
export default InviteYourHousematesScreen;
