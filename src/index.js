import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { EarthoOneProvider } from '@eartho/one-client-react';
import store from "./store/index";
import { Provider } from "react-redux";
ReactDOM.render(
  <EarthoOneProvider
  clientId="m7mL2RMcg2nBDdBX2uzA"  >
  <BrowserRouter>
    <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter>
    </EarthoOneProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals())
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
