import { Col, Container, Row } from "reactstrap";
import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {

  state = {
    currentcategory :""
  }

  changeCategory = (category)=>{  //erro fonction
    this.setState({currentcategory:category.categoryName})
  }

  render() {
    let productInfo ={titleTest:"ProductList"}
    let categoryInfo ={titleTest:"CategoryList"}
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
  
          <Row>
            <Col xs="3"> <CategoryList currentcategory={this.state.currentcategory} changeCategory={this.changeCategory} info= {categoryInfo}></CategoryList></Col>
            <Col xs="9">  <ProductList currentcategory={this.state.currentcategory} info={productInfo}></ProductList></Col>
           
          
          </Row>
        </Container>
      </div>
    );
  }
}
