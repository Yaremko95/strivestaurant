import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import items from "../data/menu.json";
import DisplayDishComments from "./DisplayDishComments.jsx";

class DishDetail extends React.Component {
  constructor(params) {
    super(params);

    this.state = {
      dish: null
    };
  }

  render() {
    return (
      <>
        {this.state.dish && (
          <>
            <div className="row">
              <div className="col-md-3">
                <img src={"/" + this.state.dish.image} className="img-fluid" alt={this.state.dish.description} />
              </div>
              <div className="col-md-9">
                <Card>
                  <CardBody>
                    <CardTitle>{this.state.dish.name}</CardTitle>
                    <CardSubtitle>{this.state.dish.label}</CardSubtitle>
                    <CardText>{this.state.dish.description}</CardText>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="row">
              <DisplayDishComments selectedDish={this.state.dish} />
            </div>
          </>
        )}
        {!this.state.dish && <h1>Loading...</h1>}
      </>
    );
  }

  componentDidMount() {
    var dishId = this.props.match.params.dishId;

    var dish = items.find(dish => dish.id.toString() === dishId);
    this.setState({
      dish: dish
    });
  }
}

export default DishDetail;
