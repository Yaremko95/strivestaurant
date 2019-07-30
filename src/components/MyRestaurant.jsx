import React, { Component } from "react";
import RestNavigation from "./RestNavigation";
import MenuCarousel from "./MenuCarousel";

class MyRestaurant extends Component {
  render() {
    return (
      <>
        <RestNavigation name="Strivestaurant" />
        <MenuCarousel />
      </>
    );
  }
}

export default MyRestaurant;
