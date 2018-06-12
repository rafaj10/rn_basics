import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AppIntroPage extends Component {

  componentDidMount() {
    this.goNext();
  }

  goNext(){
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          App intro u can do some configs here and decide here to go
        </Text>
        <Text style={styles.instructions}>
          gonna redirect in 3 secounds to login page...
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});