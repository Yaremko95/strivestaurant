import React from "react";
import { Media, Badge } from "reactstrap";
import { Link } from "react-router-dom";

class SingleDish extends React.Component {
  state = {};
  render() {
    return (
      <Media className="my-2">
        <Media left>
          <Link to={"/dishdetails/" + this.props.dish.id}>
            <Media
              object
              src={this.props.dish.image}
              style={{ width: 200, height: 200 }}
              alt="Generic placeholder image"
            />
          </Link>
        </Media>
        <Media body className="menu-item-description">
          <Media heading>
            {this.props.dish.name}
            <Badge color="warning">{this.props.dish.price}</Badge>
            <Badge color="danger">{this.props.dish.label}</Badge>
          </Media>
          {this.props.dish.description}
        </Media>
      </Media>
    );
  }
}

export default SingleDish;
