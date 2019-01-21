import React from 'react'
import { View, Modal } from 'react-native'
import DebugConfig from '../../App/Config/DebugConfig'
import RoundedButton from '../../App/Components/RoundedButton'
import PresentationScreen from '../../ignite/DevScreens/PresentationScreen'

export default class DevscreensButton extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    if (DebugConfig.showDevScreens) {
      return (
        <View>
          <RoundedButton onPress={() => 
              this.props.navigation.navigate('MainScreen')
          } title="Go to the app"
          >
          Go to the app
          </RoundedButton>
          <RoundedButton onPress={this.toggleModal}>
            Join a vegan group
          </RoundedButton>
          <Modal
            visible={this.state.showModal}
            onRequestClose={this.toggleModal}>
            <PresentationScreen screenProps={{ toggle: this.toggleModal }} />
          </Modal>
        </View>
      )
    } else {
      return (
        <View>
            <Text>MainScreen</Text>
            <Button 
                onPress={() => 
                this.props.navigation.navigate('MainScreen')
                } title="Go to the main screen" 
            />
            
        </View>
        );      
    }
  }
}
