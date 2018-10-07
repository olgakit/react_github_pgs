import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={12} zoom={props.zoom} 
      defaultCenter={{ lat: 55.819851, lng: 37.611695 }} center={props.center}>
      {props.markers && props.markers.filter(marker => marker.isVisible).map((marker,idx)=> 
        <Marker key={idx} position={{ lat: marker.lat, lng: marker.lng }} />
      )}
    </GoogleMap>
  ))
);

export default class Map extends Component {
  
  render() {
    return(
      <MyMapComponent
        {...this.props}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyC6N51tzFpr0eYV83a2uOIQhGW6DkTVAuc"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `900px`}} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    );
  }
}


