import React, { Component } from 'react';

class NewPodcast extends Component {
  state = {
    title: '',
    thumbnail: ''
  }

  handleTitle = (event) => {
    this.setState({
      title: event.target.value
    })
  }
  
  handleThumbnail = (event) => {
    this.setState({
      thumbnail: event.target.value
    })
  }
  
  handleForm = (event) => {
    event.preventDefault();
    const newPodcast = {
      title: this.state.title,
      thumbnail: this.state.thumbnail
    }
    this.setState({
      title: '',
      thumbnail: ''
    })
    this.props.onHandleNewPodcast(newPodcast)
  }

  render() { 
    return (
      <div>
        <h3>New Podcast</h3>
        <form onSubmit={this.handleForm}>
          <input onChange={this.handleTitle} type='text' placeholder='Title' value={this.state.title}/>
          <input onChange={this.handleThumbnail} type='text' placeholder='url thumbnail' value={this.state.thumbnail}/>
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  }
}
 
export default NewPodcast;