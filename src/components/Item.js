import React, { Component } from "react";

class Item extends Component {
  state = {
    isInCart: false,
  };

  handleAddToCartClick = () => {
    this.setState((prevState) => ({ isInCart: !prevState.isInCart }));
  };

  /* 
  
  (prevState) => ({ oldStateKey: !prevState.oldStateKey }) 
  
  */





  render() {
    const { name, category } = this.props;
    const { isInCart } = this.state;

    return (
      <li className={isInCart ? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button
          className={isInCart ? "remove" : "add"}
          onClick={this.handleAddToCartClick}
        >
          {isInCart ? "Remove From" : "Add to"} Cart
        </button>
      </li>
    );
  }
}

export default Item;
