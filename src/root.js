import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import ReactNativeLanguages from 'react-native-languages';
import i18n from './i18n/i18n';
import configureStore from './store/configureStore';
import App from './containers/App';

class Root extends PureComponent {

  componentWillMount() {
    ReactNativeLanguages.addEventListener('change', this.onLanguageChange);
  }

  componentWillUnmount() {
    ReactNativeLanguages.removeEventListener('change', this.onLanguageChange);
  }

  onLanguageChange = ({ language, languages }) => {
    i18n.changeLanguage(language);
  };

  render() {
    return (
      <Provider store={configureStore()}>
        <App />
      </Provider>
    );
  }
}

export default Root;