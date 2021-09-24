import React from 'react';
import axios from 'axios';
import './App.css';

export default class PersonList extends React.Component {
  state = {
    jokeRandom: []
  }
  componentDidMount() {
    axios.get(`https://api.chucknorris.io/jokes/categories`)
      .then(res => {
        const jokeRandom = res.data;
        this.setState({ jokeRandom });
      })
  }
  render() {    
    return (
      <div> 
        <h2 className='titulo-botones'>Pick A Category</h2>
        <div className="botones">
          {this.state.jokeRandom.map( cate => <button className="btn">{cate}</button>) }
        </div>
      </div>
    )
  }
}