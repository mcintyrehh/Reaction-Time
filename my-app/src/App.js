import React, { Component } from 'react';
import Wrapper from "./Components/Wrapper";
import Container from "./Components/Container"
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import logos from "./logos.json";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  
  state = {
    logos
  };
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const logos = this.state.logos.filter(logo => logo.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ logos });
  };
  
  render() {
    return (
      <Wrapper>
        <div className="col-md-12 App">
          <Nav></Nav>
        </div>
        <Container>
         {this.state.logos.map(logo => (
            <Card
              removeFriend={this.removeFriend}
              id={logo.id}
              key={logo.id}
              name={logo.name}
              image={logo.image}
              />
          ))}
        </Container>
      </Wrapper>
    );
  }
}

export default App;
