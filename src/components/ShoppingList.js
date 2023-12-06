import React, { Component } from "react";
import Item from "./Item";

class ShoppingList extends Component {
  state = {
    selectedCategory: 'ALL'
  }

  handleCategoryChange = (event) => {
    this.setState({ selectedCategory: event.target.value });
  }

  render() {

    const {items} = this.props
    const {selectedCategory} = this.state

    const itemsToDisplay = items.filter(item => {
      if (selectedCategory.toLowerCase() === "all") return true;
      return item.category === selectedCategory;
    });


    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" 
            onChange={this.handleCategoryChange} 
            value={selectedCategory}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {itemsToDisplay.map(item => (
            <Item key={item.id} name={item.name} category={item.category} />
          ))}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
