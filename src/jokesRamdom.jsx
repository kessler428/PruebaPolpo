import React from 'react';
import axios from 'axios';
import './App.css';

export default class PersonList extends React.Component {
  state = {
    joke: []
  }
  componentDidMount() {
      axios.get(`https://api.chucknorris.io/jokes/random`)
      .then(res => {
        const joke = res.data;
        // res y req
        this.setState({ joke });
      })
  }
  render() {
    return (
      <div className="joke">
        <h3 className="titulo-chiste">Chiste:</h3>
        { this.state.joke.value }
      </div>
    )
  }
}