import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import Joke from './random-joke.jsx';
import Category from './category-joke';
import reportWebVitals from './reportWebVitals';
import Footer from './footer.jsx'

ReactDOM.render(
  <React.StrictMode>
      <App />
      <Joke />
      <Category />
      <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
