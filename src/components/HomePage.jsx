import React from "react";
import { Jumbotron } from "reactstrap";
import MenuCarousel from "./MenuCarousel";

class HomePage extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Welcome to Strivestaurant!</h1>
          <p className="lead">The best dishes you can find on the web!</p>
          <hr className="my-2" />
          <p>Come and visit us, we can only cook Pasta!</p>
          <MenuCarousel />
        </Jumbotron>
      </div>
    );
  }
}

export default HomePage;
