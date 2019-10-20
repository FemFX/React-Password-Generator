import React, { Component } from 'react';

export default class Checkbox extends Component {

  render() {
    return (
      <div className="all-checkbox">
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="isNumbers"
            checked={this.props.isNumbers}
            onClick={this.props.changeNumbers}
          />
          <div>Numbers</div>
        </div>
        <div className="checkbox-container">
          <input
            type="checkbox"
            name="isLetters"
            checked={this.props.isLetters}
            onClick={this.props.changeLetters}
          />
          <div>Letters</div>
        </div>
      
      </div>
    );
  }
}
