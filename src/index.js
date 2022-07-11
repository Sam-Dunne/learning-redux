import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import "../src/style.scss";


//Store

//Action 
//Increment

//Reducer

//Dispatch (send action to reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


