import React, { useState, useEffect } from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import items from "../data/menu.json";
import DisplayDishComments from "./DisplayDishComments.jsx";

function DishDetail(props) {
  const [dish, setDish] = useState(null);

  useEffect(() => {
    let dishId = props.match.params.dishId;

    let temp = items.find((dish) => dish.id.toString() === dishId);
    setDish(temp);
  }, []);

  return (
    <>
      {dish ? (
        <>
          <div className="row">
            <div className="col-md-3">
              <img
                src={"/" + dish.image}
                className="img-fluid"
                alt={dish.description}
              />
            </div>
            <div className="col-md-9">
              <Card>
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardSubtitle>{dish.label}</CardSubtitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
          </div>
          <div className="row">
            <DisplayDishComments selectedDish={dish} />
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default DishDetail;
