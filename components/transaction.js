import * as React from 'react';
import {
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

import * as Permissions from "expo-permissions"
import { BarCodeScanner } from "expo-barcode-scanner"

export default class Trans extends React.Component {

  constructor() {
    super()
    this.state = {
      cameraPER: null,
      datascn: false,
      scngetdat: '',
      butstate: 'vac'
    }
  }

  accuirecamper = async () => {
    const awaitper = await Permissions.askAsync(Permissions.CAMERA)
    this.setState({ cameraPER: awaitper == "Success" })
  }

  barscn= async ({type,data}) => {
    this.setState({
      datascn: true,
      scngetdat: data, 
      butstate: 'vac'
    })
  }

  render() {
    if (this.state.butstate == "occ" && this.state.cameraPER) {
      return (
        <BarCodeScanner onBarCodeScanned={datascn ? "Done" : this.barscn}>

        </BarCodeScanner>
      )
    }
    else if (this.state.butstate == "vac") {
      return (
        <View>
          <TouchableOpacity style={styles.button} onPress={this.accuirecamper}><Text>CLICK TO SCAN</Text></TouchableOpacity>
          <Text>{
            this.state.cameraPER == true
              ? this.state.scngetdat
              : Alert.alert('FOR GOD S SAKE PRESS THE CLICK TO SCAN BUTTON')
          }</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 200,
    marginTop: 100,
    borderRadius: 200,
    justifyContent: 'center',
    backgroundColor: 'pink',
    paddingHorizontal: 15,
  },
});
