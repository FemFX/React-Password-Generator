import React, { Component } from 'react';

export default class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: this.props.password,
      value: 6
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="white-text">
        <div>{this.state.value}</div>
        <input
          type="range"
          value={this.state.value}
          onChange={this.handleChange}
          max="16"
          min="4"
        />
        <button
          className="button"
          onClick={() => this.props.onGenerate(this.state.value)}
        >
          Generate
        </button>
      </div>
    );
  }
}
