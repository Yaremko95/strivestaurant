import React from "react";
import items from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Alert } from "reactstrap";

class MenuPage extends React.Component {
  state = {};
  render() {
    return (
      <>
        {items && items.map((dish) => <SingleDish dish={dish} key={dish.id} />)}
        {!items && <Alert color="secondary">No dishes</Alert>}
      </>
    );
  }
}

export default MenuPage;
