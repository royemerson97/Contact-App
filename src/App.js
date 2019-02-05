import React, { Component } from 'react';
import './App.css';
import { StyledHeader } from './shared/components/header.component';

const OverrideStyles = () => ({
  login:{
    background : 'red'
  }
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <StyledHeader classes={OverrideStyles.login}/>
      </div>
    );
  }
}

export default App;
