import React from 'react';
import './App.css';
import FizzBuzz from './components/FizzBuzz'
import RandomQuotes from './components/RandomQuotes'
import StringReverser from './components/StringReverser'

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world</h1>
      </header>
      <FizzBuzz />
      <StringReverser />
      <RandomQuotes />
    </div>
  );
}

export default App;
