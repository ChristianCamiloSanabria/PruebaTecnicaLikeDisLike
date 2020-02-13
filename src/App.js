import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.classNameLikes = "like-button";
    this.counterLikes = 100;
    this.counterClicsLikes = 0;

    this.classNameDislikes = "dislike-button";
    this.counterDislikes = 25;
    this.counterClicsDislikes = 0;

    this.mEventLikes = null;
    this.mEventDisLikes = null;

    //this.handleChange = this.handleChange.bind(this);
    this.handleClicLikeButton = this.likeButton.bind(this);
    this.handleClicDislikeButton = this.dislikeButton.bind(this);

    this.state = { 
      classNameLikes: this.classNameLikes,
      classNameDislikes: this.classNameDislikes,
      likes: this.counterLikes, 
      dislikes: this.counterDislikes,
      activeClassLikedLikeButton: true,
      activeClassLikedDislikeButton: true 
    };
  }

  likeButton(e) {
    //console.log("Like");
    //var likeButtonElement = e.target as HTMLElement;
    this.counterClicsLikes++;
    this.mEventLikes = e;
    
    if(this.counterClicsLikes === 1){
      this.counterLikes++;

      // e.target.classList.add('liked');
      this.toggleClassLikedLikeButton();
      
      if(this.counterClicsDislikes === 1){
        this.dislikeButton(this.mEventDisLikes);
      }
    }
    else if(this.counterClicsLikes === 2){
      this.counterLikes--;
      this.counterClicsLikes = 0;
      // e.target.classList.remove('liked');
      this.toggleClassLikedLikeButton();    
    }

    this.setState(state => ({ likes: this.counterLikes }));
  }

  toggleClassLikedLikeButton() {
    const currentState = this.state.activeClassLikedLikeButton;
    this.setState({ activeClassLikedLikeButton: !currentState });

    var likedLikes = this.state.activeClassLikedLikeButton ? 'liked': '';
    this.setState({ classNameLikes: this.classNameLikes + ' ' + likedLikes });
  }

  dislikeButton(e) {
    //console.log("Dislike");
    this.counterClicsDislikes++;
    this.mEventDisLikes = e;

    if(this.counterClicsDislikes === 1){
      this.counterDislikes++;

      // e.target.classList.add('liked');
      this.toggleClassLikedDislikeButton();

      if(this.counterClicsLikes === 1){
        this.likeButton(this.mEventLikes);
      }
    }
    else if(this.counterClicsDislikes === 2){
      this.counterDislikes--;
      this.counterClicsDislikes = 0;
      // e.target.classList.remove('liked');
      this.toggleClassLikedDislikeButton();
    }

    this.setState(state => ({ dislikes: this.counterDislikes }));
  }

  toggleClassLikedDislikeButton() {
    const currentState = this.state.activeClassLikedDislikeButton;
    this.setState({ activeClassLikedDislikeButton: !currentState });

    var likedDislikes = this.state.activeClassLikedDislikeButton ? 'liked': '';
    this.setState({ classNameDislikes: this.classNameDislikes + ' ' + likedDislikes });
  }

  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload, hi oscar.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <br/><br/>
          <div>
            {/* <button className="like-button" onClick={this.handleClicLikeButton}>Like | <span>{this.state.likes}</span></button> */}
            {/* <button className={this.state.activeClassLikedLikeButton ? 'liked': null} onClick={this.handleClicLikeButton}>Like | <span>{this.state.likes}</span></button> */}
            <button className={this.state.classNameLikes} onClick={this.handleClicLikeButton}>Like | <span>{this.state.likes}</span></button>
            {/* <button className="dislike-button" onClick={this.handleClicDislikeButton}>Dislike | <span>{this.state.dislikes}</span></button> */}
            {/* <button className={this.state.activeClassLikedDislikeButton ? 'liked': null} onClick={this.handleClicDislikeButton}>Dislike | <span>{this.state.dislikes}</span></button> */}
            <button className={this.state.classNameDislikes} onClick={this.handleClicDislikeButton}>Dislike | <span>{this.state.dislikes}</span></button>
          </div>
        </header>
      </div>

      
    );
  }
}

export default App;
