import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  state = {
    categories: [
      { categoryId: 1, categoryName: "sport" },
      { categoryId: 2, categoryName: "Travel" },
    ],

    currentcategory :""
  };

 

  render() {
    return (
      <div>
        <h3>{this.props.info.titleTest}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem onClick={() => this.props.changeCategory(category)} key={category.categoryId}>
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.props.currentcategory}</h4>
      </div>
    );
  }
}

export default CategoryList;
