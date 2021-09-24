import React from 'react';
import './App.css';
  
export default class Cabecera extends React.Component {

  reload = () => {
    window.location.reload(true);
  }

  render() {
  return (
    <div className="App">
      <header>
        <div class="image-background">
          <h1 className='titulo-principal'>Chuck Norris</h1>
          <h1 className='titulo-secundario'>Jokes Page</h1>
        </div>
        
        <p><b>The best page to enjoy and have fun.</b></p>
        
        <button className="btn-principal" onClick={this.reload} >Load a random joke</button>
      </header>
    </div>
  );
  }
}

