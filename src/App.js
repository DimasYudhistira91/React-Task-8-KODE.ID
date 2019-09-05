import React, { Component } from 'react';
import './App.css';
import Hello from './components/hello';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  state = {
    film: 5,
    game: [
      {id: 1, title: 'war wings 2'},
      {id: 2, title: 'age of empire 3'},
      {id: 3, title: 'bus simulator'}
    ]
  }

  render() {
    return (
      <React.Fragment>
        <p>
          {JSON.stringify(this.state.game)}
        </p>
        <Header/>
        <Hello
          firstName={'Dimas'}
          lastName={'Yudhistira'}
          age={28}
          game={this.state.game.length}
          semuaGame={JSON.stringify(this.state.game)}
          isStudent={true}
        />
        <Footer/>
      </React.Fragment>
    );
  }
}
 
export default App;
