import React from 'react';
// import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Editor from './Editor';

import configureStore from '../configureStore';
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Editor />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Hello React!")}/>
            <Route exact path="/editor" component={Editor}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
