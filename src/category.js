import React from "react";
import axios from "axios";
import "./App.css";

export default class PersonList extends React.Component {
  handleClick = (evt) => {
    this.setState.category = evt.target.value;

    const url = `https://api.chucknorris.io/jokes/random?category=${this.setState.category}`;
    console.log(url);

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
    axios.get(`https://api.chucknorris.io/jokes/categories`).then((res) => {
      const jokeRandom = res.data;
      this.setState({ jokeRandom });
    });
  }

  render() {
    return (
      <div>
        <h2 className="titulo-botones">Pick A Category</h2>
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
          {this.state.jokInCategory}
        </div>
      </div>
    );
  }
}