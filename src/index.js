import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css';
import store from './store';
import {Provider} from 'react-redux'

let projects = [
  {
    id: 1,
    Name: "CivicPlus",
    Technologies:["C#","MVC","Identity Server"]
  },
  {
    id: 2,
    Name: "Trace3",
    Technologies:["C#","MVC"]
  },
  {
    id: 3,
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
