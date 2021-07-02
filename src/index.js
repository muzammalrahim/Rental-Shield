import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import common_ar from '../src/translations/ar/common.json';
import common_en from '../src/translations/en/common.json';
import i18next from "i18next";
import { initReactI18next } from "react-i18next";


import '../src/assets/css/tailwind.css';
import 'bootstrap/dist/css/bootstrap.css';


i18next.use(initReactI18next)
.init({
  interpolation: { 
    escapeValue: false 
  },  // React already does escaping
  lng: 'en',                              // language to use
  resources: {
      en: {
          common: common_en               // 'common' is our custom namespace
      },
      ar: {
          common: common_ar
      },
  },
});



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


