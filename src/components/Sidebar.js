import React, { Component } from 'react';
import Locations from './Locations';

export default class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      venues: []
    };
  }
  handleFilter = () => {
    if(this.state.query.trim() !== "") {
      const venues = this.props.venues.filter(venue => 
        venue.name.toLowerCase().includes(this.state.query.toLowerCase())
      );
      return venues;
    }
    return this.props.venues;
  }
  handleChange = event => {
    this.setState({query:event.target.value});
    const markers = this.props.venues.map(venue => {
      const hasMatch = venue.name.toLowerCase().includes(event.target.value.toLowerCase());
      const marker = this.props.markers.find(marker => marker.id === venue.id);
      if(hasMatch) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });
    this.props.updateSuperState({markers});
  }
  render() {
    return(<div className="sidebar">
      <input type={"search"} id={"search"} placeholder={"Filter Locations"} onChange={this.handleChange} />
      <Locations {...this.props} venues={this.handleFilter()} handleOneLocationClick = {this.props.handleOneLocationClick} />
    </div>)
  }
}