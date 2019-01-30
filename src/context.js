import React, { Component } from 'react'
import {productStore, detailProduct} from './components/data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: productStore,
        detailProduct: detailProduct
    }
    handleDetail = () => {
        console.log('hello from detail')
    }

    addToCart = () => {
        console.log('hello from cart')
    }

  render() {
    return (
      <ProductContext.Provider 
        value={{
          ...this.state,
          handleDetail: this.handleDetail, 
          addToCart: this.addToCart
        }}>
          {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}