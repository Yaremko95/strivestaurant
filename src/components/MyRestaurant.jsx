import React, { Component } from "react";
import RestNavigation from "./RestNavigation";
import MenuCarousel from "./MenuCarousel";
import DisplayDishComments from "./DisplayDishComments";
import ChildrenEx from "./ChildrenEx";

class MyRestaurant extends Component {
  constructor(params) {
    super(params);

    //THIS IS THE ONLY MOMENT IN WHICH YOU CAN CHANGE THE STATE VIA this.state = { ... }
    this.state = {
      selectedDish: null
    };
  }

  dishSelected = dish => {
    this.setState({ selectedDish: dish });
  };

  render() {
    return (
      <>
        <RestNavigation name="Strivestaurant" />
        <MenuCarousel onDishSelected={this.dishSelected} />
        <DisplayDishComments selectedDish={this.state.selectedDish} />
      </>
    );
  }

  updateColumns = colSizeInput => {
    //DON'T TRY THIS AT HOME! This update the state but doesn't update the DOM
    //this.state.colSize = colSizeInput.currentTarget.value;

    //ALWAYS USE THIS SET STATE FOR UPDATING THE STATE
    this.setState({
      colSize: colSizeInput.currentTarget.value
    });

    //colSize => [column123], [column4321]
  };
}

export default MyRestaurant;
