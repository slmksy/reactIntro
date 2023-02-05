import { Col, Container, Row } from "reactstrap";
import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import NotFound from "./NotFound";
import Cartlist from "./Cartlist";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  state = {
    currentcategory: "",
    products: [],
    cart: [],
  };

  changeCategory = (category) => {
    //erro fonction
    this.setState({ currentcategory: category.categoryName });
    console.log(category);
    this.getProducts(category.categoryId);
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    console.log(categoryId);
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  addToCart = (product) => {
    let newCart = this.state.cart;

    var addedItem = newCart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + "added to cart");
  };

  removeFromCart = (product) => {
    let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
    this.setState({ cart: newCart });
  };

  render() {
    let productInfo = { titleTest: "ProductList" };
    let categoryInfo = { titleTest: "CategoryList" };
    return (
      <div>
        <Container>
          <Navi
            removeFromCart={this.removeFromCart}
            cart={this.state.cart}
          ></Navi>

          <Row>
            <Col xs="3">
              {" "}
              <CategoryList
                currentcategory={this.state.currentcategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="9">
              {" "}
              <Routes>
                <Route
                  exact
                  path="/"
                  element ={
                    <ProductList                  
                      products={this.state.products}
                      currentcategory={this.state.currentcategory}
                      addToCart={this.addToCart}
                      info={productInfo}
                    ></ProductList>
                  }
                />
                <Route exact path="/cart" element={   
                    <Cartlist                  
                      products={this.state.products}
                      cart={this.state.cart}
                      removeFromCart={this.removeFromCart}
                      
                    ></Cartlist>}/> 
               
                <Route path="*" element={<NotFound></NotFound>}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
