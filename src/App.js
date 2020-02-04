import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Output from './Output';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Input />
          <Output />
        </header>
      </div>
    );
  }
  
}


export default App;
