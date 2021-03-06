import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/header';
// import Footer from './components/footer';
import Podcast from './components/podcast';
import FbImg from './img/fb.jpg';
import IgImg from './img/ig.jpg';
import WaImg from './img/wa.jpg';
import Search from './components/search';
import AddButton from './components/addButton';
import NewPodcast from './components/newPodcast';
import Menu from './components/menu';

const isSearch = searchTerm => item => item.title.toLowerCase().includes(searchTerm. toLowerCase());

class App extends Component {
  state = {
    podcast: [
      {
        id: 1,
        thumbnail: FbImg,
        title: 'Facebook Developer'
      },
      {
        id: 2,
        thumbnail: IgImg,
        title: 'Instagram Developer'
      },
      {
        id: 2,
        thumbnail: WaImg,
        title: 'Whatsapp Developer'
      },
    ],

    inputUser: '',

    ui: {
      formVisibility: false
    }
  }

  handleButton() {
    console.log('searching');
  };

  handleInput = (event) => {
    event.preventDefault();
    this.setState({ inputUser: event.target.value })
  };

  handleNewPodcast = (newPodcast) => {
    this.setState({
      podcast: [...this.state.podcast, newPodcast]
    })
  }

  handleNewButton = () => {
    this.setState({
      ui: {
        formVisibility: !this.state.ui.formVisibility
      }
    })
  }

  render() { 
    return (
      <React.Fragment>
        <Header/>
        <Menu/>
        <Search
          handleInput={this.handleInput}
          handleButton={this.handleButton}
        />
        <NewPodcast
          onHandleNewPodcast={this.handleNewPodcast}
          visible={this.state.ui.formVisibility}
        />
        {this.state.podcast
          .filter(isSearch(this.state.inputUser))
          .map(podcast =>
          <Podcast
            title={podcast.title}
            thumbnail={podcast.thumbnail}
          />
        )}
        <AddButton
          handleNewButton={this.handleNewButton}
        />
      </React.Fragment>
    );
  }
}
 
export default App;
