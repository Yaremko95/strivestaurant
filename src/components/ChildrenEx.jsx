import React from "react";
import items from "../data/menu.json";

class ChildrenEx extends React.Component {
  state = {};
  render() {
    return (
      <div className="container infinite-scroll">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-md-5" key={index}>
              <img src={item.image} className="img-fluid" alt="food" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ChildrenEx;
