import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import store from './store';
import {Provider} from 'react-redux'

let projects = [
  {
    Name: "Trace3",
    Technologies:["C#","MVC"]
  },
  {
    Name: "IngoMoney",
    Technologies:["C#","MVC"]
  }
]
var appStore = store({projects:projects});
console.log(appStore);

ReactDOM.render(
  <Provider store={appStore}>
      <App />
  </Provider >,
  document.getElementById('root')
);
