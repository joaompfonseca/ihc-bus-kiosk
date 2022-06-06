import ReactDOM from 'react-dom/client';
import i18next from "i18next";
import { initReactI18next, I18nextProvider } from 'react-i18next';
import App from './App';
import { en, es, fr, pt } from './translations/index'

i18next
    .use(initReactI18next)
    .init({
        interpolation: { escapeValue: false },
        lng: 'en',
        resources: {
            en: { common: en },
            es: { common: es },
            fr: { common: fr },
            pt: { common: pt }
        }
    });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <I18nextProvider>
        <App />
    </I18nextProvider>
);
