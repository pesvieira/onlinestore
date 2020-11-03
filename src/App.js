import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './Config/ReactotronConfig';

import Header from './Components/Header';
import GlobalStyle from './Styles/global';
import Routes from './routes';
import history from './Services/history';
import store from './Store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
