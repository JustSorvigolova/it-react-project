import store from "./Redux/redux-store";
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import App from "./Components/App/App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
            <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root'));






