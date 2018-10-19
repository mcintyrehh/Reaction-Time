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
    logos: logos,
    chosen: [],
    highScore: 0,
    correct: 0
  };
  shuffleDeck = id => {
    const logos = this.state.logos;
    this.shuffle(logos);
    this.setState({ logos })
    const chosen = this.state.chosen;
    if (chosen.indexOf(id) >= 0) {
      let correct = 0;
      let chosen = [];
      this.setState({correct});
      this.setState({chosen});
      console.log("NOPE")
    }
    else {
      let correct = this.state.correct;
      let highScore = this.state.highScore;
      correct += 1
      if (correct > highScore) {
        highScore = correct;
        this.setState({highScore})
      }
      this.setState({correct});
      console.log(correct);
      chosen.push(id);
      this.setState({ chosen })
      console.log(chosen);
    }
  }
  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const logos = this.state.logos.filter(logo => logo.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ logos });
  };
  // Fisher-Yates Shuffle
  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  render() {
    return (
      <Wrapper>
        <div className="col-md-12 App">
          <Nav
            highScore={this.state.highScore}
            correct={this.state.correct}
          ></Nav>
        </div>
        <Container>
          {this.state.logos.map(logo => (
            <Card
              shuffleDeck={this.shuffleDeck}
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
