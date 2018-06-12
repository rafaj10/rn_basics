import React, { Component } from 'react';
import {I18nextProvider} from 'react-i18next';
import NavigationService from '../services/NavigationService';
import i18n from '../i18n/i18n';
import {Root} from 'native-base';
import {StackNavigator, SwitchNavigator} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppIntroPage from './AppIntroPage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const AppStack = StackNavigator(
  {
    HomePage: {
      screen: HomePage
    },
  },
  {
    headerMode: 'none'
  }
);

const LoginStack = StackNavigator(
  {
    LoginPage: {
      screen: LoginPage
    },
  },
  {
    headerMode: 'none'
  }
);

const RootStack = SwitchNavigator(
  {
    AppIntroPage: AppIntroPage,
    Login: LoginStack,
    App: AppStack,
  },
  {
    initialRouteName: 'AppIntroPage',
    headerMode: 'none'
  }
);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Root>
        <I18nextProvider i18n={i18n}>
          <RootStack
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </I18nextProvider>
      </Root>
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
