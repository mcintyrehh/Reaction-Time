import React, { Component } from 'react';
import Wrapper from "./Components/Wrapper";
import Container from "./Components/Container"
import Nav from "./Components/Nav";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  
  
  
  
  render() {
    return (
      <Wrapper>
        <div className="col-md-12 App">
          <Nav></Nav>
        </div>
        <Container></Container>
      </Wrapper>
    );
  }
}

export default App;
