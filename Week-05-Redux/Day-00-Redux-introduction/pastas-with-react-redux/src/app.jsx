import './app.scss';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import PastasContainer from './components/pastasContainer';
import ContainerWithHook from './components/containerWithHook';

const App = () => (
  <Provider store={store}>
    <PastasContainer />
    <ContainerWithHook />
  </Provider>
);

export default App;
