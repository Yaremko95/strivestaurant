import React, { Component } from "react";
import { Container, Alert, ListGroup, ListGroupItem, Badge } from "reactstrap";

class DisplayDishComments extends Component {
  state = {};
  render() {
    return (
      <Container className="my-5">
        {this.props.selectedDish && (
          <ListGroup>
            {this.props.selectedDish.comments.map((comment, index) => {
              var color = "";
              switch (comment.rating) {
                case 1:
                  color = "danger";
                  break;
                case 2:
                  color = "warning";
                  break;
                case 3:
                  color = "secondary";
                  break;
                default:
                  color = "success";
                  break;
              }

              return (
                <ListGroupItem key={index}>
                  {comment.author}: {comment.comment} |{" "}
                  <Badge pill color={color}>
                    {comment.rating}
                  </Badge>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        )}
        {!this.props.selectedDish && (
          <Alert color="secondary">No dish selected, please click on a Dish to show the comments</Alert>
        )}
      </Container>
    );
  }
}

export default DisplayDishComments;
