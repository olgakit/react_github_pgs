import React, { Component } from 'react';

export default class OneLocation extends Component {
  render() {
    return ( 
      <li className="oneLocation" onClick={() => this.props.handleOneLocationClick(this.props)}>
        {this.props.name}
      </li>
    );
  }
}