import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Editor from './Editor';
import SparkForm from './SparkForm';
import LoginSignup from './LoginSignup';
import Navbar from './Navbar';


import configureStore from '../configureStore'
const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Editor />} />
            <Route exact path="/submit" render={() => <SparkForm />} />
            <Route exact path="/login" render={() => <LoginSignup />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
