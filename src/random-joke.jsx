/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import axios from 'axios';
import './App.css';

export default class RandomJoke extends React.Component {
  state = {
    joke: []
  }
  componentDidMount() {
      axios.get(`https://api.chucknorris.io/jokes/random`) // En esta parte se manda a llamar el api para generar chistes de manera Aleatoria
      .then(res => {
        const joke = res.data;
        this.setState({ joke });
      })
  }
  render() {
    return (
      <div className="joke">
        <h3 className="titulo-chiste">Joke:</h3> 
        <div className="contenido-chiste">
          { this.state.joke.value } 
        </div>
      </div>
    )
  }
}

// En el <div className="contenido-chiste"> se encuentra almacenado el chiste que genera el API
