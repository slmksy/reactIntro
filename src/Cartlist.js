import React, { Component } from "react";
import { Table } from "reactstrap";

class Cartlist extends Component {
  renderCart() {
    return (
      <Table striped>
        <thead>
    <tr>
        <th>#</th>
        <th>Category ID</th>
        <th>Product Name</th>
        <th>Unit price</th>
        <th>Unit in Stock</th>
        <th>quantity</th>            
    </tr>
        </thead>
        <tbody>
            {
                this.props.cart.map(cartItem=>(
                    <tr key ={cartItem.product.id}>
                    <td>{cartItem.product.id}</td>
                    <td>{cartItem.product.categoryId}</td>
                    <td>{cartItem.product.productName}</td>
                    <td>{cartItem.product.unitPrice}</td>
                    <td>{cartItem.product.unitInStock}</td>
                    <td>{cartItem.quantity}</td>
                    </tr>
                ))
            }
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>Cartlist</div>;
  }
}

export default Cartlist;
