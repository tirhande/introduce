import React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import Store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
    <Provider store={Store}>
        <App />
    </Provider>
    ,document.getElementById("root")
);