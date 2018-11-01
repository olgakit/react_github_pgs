import React, { Component } from 'react';

export default class OneLocation extends Component {
  render() {
    return ( 
      <li className="oneLocation" tabIndex="2" onClick={() => this.props.handleOneLocationClick(this.props)} onKeyDown={() => this.props.handleOneLocationClick(this.props)}>
        {this.props.name}
      </li>
    );
  }
}