import React, { Component } from 'react';
import Header from './components/Header';
import Generator from './components/Generator';
import Checkbox from './components/Checkbox';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      random: 0.5,
      letters: [
        'q',
        'w',
        'e',
        'r',
        't',
        'y',
        'u',
        'i',
        'o',
        'p',
        'a',
        's',
        'd',
        'f',
        'g',
        'h',
        'j',
        'k',
        'l',
        'z',
        'x',
        'c',
        'v',
        'b',
        'n',
        'm'
      ],
      isNumbers: true,
      isLetters: false
    };
    this.onGenerate = this.onGenerate.bind(this);
    this.changeNumbers = this.changeNumbers.bind(this);
    this.changeLetters = this.changeLetters.bind(this);
  }
  onGenerate(length) {
    let password = '';
    if (this.state.isNumbers) {
      for (let i = 0; i < length; i++) {
        password += Math.floor(Math.random() * 10);
      }
    }
    if (this.state.isLetters) {
      for (let i = 0; i < length; i++) {
        password += this.state.letters[Math.floor(Math.random() * 10)];
      }
    }
    if (this.state.isLetters && this.state.isNumbers) {
      for (let i = 0; i < length; i++) {
        password +=
          this.state.letters[Math.floor(Math.random() * 10)] ||
          Math.floor(Math.random() * 10);
      }
    }
    this.setState({
      password: password
    });
  }
  changeNumbers() {
    this.setState({ isNumbers: !this.state.isNumbers });
  }
  changeLetters() {
    this.setState({ isLetters: !this.state.isLetters });
  }
  render() {
    return (
      <div className="alert">
        <Header />
        <div className="password">{this.state.password}</div>
        <Generator
          onGenerate={this.onGenerate}
          password={this.state.password}
        />
        <Checkbox
          isNumbers={this.state.isNumbers}
          isLetters={this.state.isLetters}
          changeNumbers={this.changeNumbers}
          changeLetters={this.changeLetters}
        />
      </div>
    );
  }
}
