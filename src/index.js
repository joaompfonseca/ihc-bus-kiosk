import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './App';
import common_en from './translations/en/common.json'
import common_pt from './translations/pt/common.json'
import { initReactI18next } from 'react-i18next';

i18next
  .use(initReactI18next)
  .init({
  interpolation: { escapeValue: false },
  lng: 'en',
  resources: {
    en: {
      common: common_en
    },
    pt: {
      common: common_pt
    }
  }
});
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <I18nextProvider>
    <App />
  </I18nextProvider>
);
