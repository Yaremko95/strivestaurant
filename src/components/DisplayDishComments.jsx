import React, { Component } from "react";

class DisplayDishComments extends Component {
  state = {};
  render() {
    return <>
        {this.props.selectedDish && <div>Some dish info</div>}
        {!this.props.selectedDish && <div>No dish selected</div>}
    </>;
  }
}

export default DisplayDishComments;
