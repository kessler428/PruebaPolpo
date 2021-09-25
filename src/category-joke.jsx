import React from "react";
import axios from "axios";
import "./App.css";

export default class CategoryJoke extends React.Component {
  handleClick = (evt) => {
    this.setState.category = evt.target.value;
    // El API se concatena con Category para saber de que categoria sera el chiste
    const url = `https://api.chucknorris.io/jokes/random?category=${this.setState.category}`;

    axios.get(url).then((res) => {
      const jokInCategory = res.data.value;
      this.setState({ jokInCategory });
    });
  };

  state = {
    jokeRandom: [],
    category: "",
    jokInCategory: [],
  };
  
  componentDidMount() {
    console.log(this.setState.category);
    axios.get(`https://api.chucknorris.io/jokes/categories`)// En esta parte se manda a llamar el api para generar chistes por las categorias que entrega la api
      .then((res) => {
      const jokeRandom = res.data;
      this.setState({ jokeRandom });
    });
  }

  render() {
    return (
      <div>
        <h2 className="titulo-botones">Pick a Category</h2>
        <div className="botones">
          {this.state.jokeRandom.map((cate) => (
            <button
              className="btn"
              value={cate}
              onClick={(evt) => this.handleClick(evt)}
            >
              {cate}
            </button>
          ))}
        </div>
        <div className="joke">
          <h3 className="titulo-chiste">Chiste:</h3>
          <div className="chiste-aleatorio">
            {this.state.jokInCategory}
          </div>
        </div>
      </div>
    );
  }
}

// En el <div className="chiste-aleatorio"> se encuentra almacenado el chiste que genera el API