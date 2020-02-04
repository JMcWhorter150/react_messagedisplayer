import React from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input';
import Output from './Output';
import ClearInput from './ClearInput';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "this is the text value in state"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ClearInput clearFunction={this._clearInput} />
          <Input textInput={this.state.textValue} updateText={this._updateText} />
          <Output inputText={this.state.textValue} />
        </header>
      </div>
    );
  }

  _updateText = (event) => {
    this.setState({
      textValue: event.target.value
    });
  }

  _clearInput = () => {
    this.setState({
      textValue: ""
    });
  }

}


export default App;
