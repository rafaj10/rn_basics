import ReactNativeLanguages from 'react-native-languages';
import i18n from 'i18next';

import en from './locales/en.json';
import ptBr from './locales/ptBr.json';
import enAccessibility from './locales/enAccessibility.json';
import ptBrAccessibility from './locales/ptBrAccessibility.json';

const ptBrLocales = Object.assign({}, ptBrAccessibility, ptBr);
const enLocales = Object.assign({}, enAccessibility, en);

export default i18n.init({
  debug: true,
  lng: ReactNativeLanguages.language,
  fallbackLng: 'en',
  resources: {
    en: {
      translation: enLocales
    },
    'pt-BR': {
      translation: ptBrLocales
    }
  }
});
