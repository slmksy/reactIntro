import React, { Component } from 'react';

class ProductList extends Component {

    
    render() {
        return (
            <div>
                 <h3>{this.props.info.titleTest} - {this.props.currentcategory}</h3>
            </div>
        );
    }
}

export default ProductList;