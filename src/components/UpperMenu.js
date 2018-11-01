import React, { Component } from 'react';

export default class UpperMenu extends Component {
  render() {
    return(
      <div className="upperMenuContainer">
        <div className="upperMenu" >
          <i className="fas fa-bars fa-2x" id="menu" tabIndex="2" onClick={() => { this.props.toggleSideBar() }} onKeyDown={() => { this.props.toggleSideBar() }}></i>
        </div>
      </div>
    );
  }
}
