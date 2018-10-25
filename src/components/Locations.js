import React, { Component } from 'react';
import OneLocation from './OneLocation';

export default class Locations extends Component {
  render() {
    return(
      <ul className="locations">
        {this.props.venues && this.props.venues.map((venue, idx) => (<OneLocation key={idx} {...venue}
        handleOneLocationClick={this.props.handleOneLocationClick} 
        
        />))}
      </ul>
    );
  }
}