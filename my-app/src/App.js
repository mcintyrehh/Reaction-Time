import React, { Component } from 'react';
import Wrapper from "./Components/Wrapper";
import Container from "./Components/Container"
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import friends from "./friends.json";
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  
  state = {
    friends
  };
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };
  
  render() {
    return (
      <Wrapper>
        <div className="col-md-12 App">
          <Nav></Nav>
        </div>
        <Container>
         {this.state.friends.map(friend => (
            <Card
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              />
          ))}
        </Container>
      </Wrapper>
    );
  }
}

export default App;
