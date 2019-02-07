import React, { Component } from 'react';
import './App.css';
import { StyledHeader } from './shared/components/header.component';
import InjectSheet from 'react-jss'
import { AppRoutes } from './main-routes';

const OverrideStyles = () => ({
  loginOverride:{
    background : 'red'
  }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledHeader classes={{login : this.props.classes.loginOverride}}/>
        <AppRoutes/>
      </div>
    );
  }
}

export default InjectSheet(OverrideStyles)(App);
