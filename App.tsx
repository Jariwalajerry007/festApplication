import React from 'react';
import {Provider} from 'react-redux';
import MainContainer from './components/MainContainer';
import {store} from './components/redux/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
};

export default App;
