import React from "react";
import items from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";

class MenuPage extends React.Component {
  state = {};
  render() {
    return <>{items && items.map(dish => <SingleDish dish={dish} key={dish.id} />)}</>;
  }
}

export default MenuPage;
