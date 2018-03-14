'use strict';

import React, { Component } from 'react';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <label>
        {this.props.label}: <input type="text" id={this.props.id} value={this.state.value} onChange={this.handleChange} />
      </label>
    );
  }
}
