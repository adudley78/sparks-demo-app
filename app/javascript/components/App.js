import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Editor from './Editor';
import Header from './Header';

import configureStore from '../configureStore'
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Editor />} />
            {/* <Route path="/sparks/:id?" component={Editor} /> */}
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
