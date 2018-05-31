import store from "./store"; // It can be used by React POC
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from "./components/App";
//import {Game} from './components/game';

// ========================================
ReactDOM.render(
  <Provider store={store}>
	<App />
  </Provider>,
  document.getElementById('root')
);

