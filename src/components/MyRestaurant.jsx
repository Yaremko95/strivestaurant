import React, { Component } from "react";
import RestNavigation from "./RestNavigation";
import AddReservation from "./AddReservation";
import { Container } from "reactstrap";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { withRouter } from "react-router";
import MenuPage from "./MenuPage";
import HomePage from "./HomePage";
import DishDetail from "./DishDetail";
import AddReservationControlled from "./AddReservationControlled";

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
    var RoutedNavigation = withRouter(RestNavigation);

    return (
      <Router>
        <RoutedNavigation />
        {/* <RestNavigation name="Strivestaurant" /> */}
        {/* 
          Router
          - For every children component
          - is this a Route? if so, I'm checking the path and displaying the Component / render only if I match
          - otherwise do not interfere
        */}

        <Container className="my-5">
          <Route path="/" exact component={HomePage} />
          <Route path="/menu" exact component={MenuPage} />
          <Route path="/reservation" exact component={AddReservationControlled} />
          <Route path="/oldreservation" exact component={AddReservation} />
          <Route path="/dishdetails/:dishId" component={DishDetail} />

          {/* <Route path="/(food|dishes)" render={MenuPage} /> */}

          {/* <Route path="/michele" render={() => <MenuCarousel click={() => this.setState({ michele: true })} />} /> */}
          {/* <Route
            path="/notfound"
            render={() => (
              <>
                <MenuPage />
                <AddReservation />
              </>
            )}
          /> */}
        </Container>
      </Router>
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
