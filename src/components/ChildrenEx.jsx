import React from "react";

class ChildrenEx extends React.Component {
  state = {};
  render() {
    return (
      <div>
        This is a very simple Component
        {this.props.children}
      </div>
    );
  }
}

export default ChildrenEx;
