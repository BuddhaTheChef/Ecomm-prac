import React, { Component } from 'react'
import {productStore, detailProduct} from './components/data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct
    }

    componentDidMount(){
        this.setProducts();
    }

    setProducts = () => {
        let tempProducts = [];
        productStore.forEach(item => {
            const singleProduct = {...item};
            tempProducts = [...tempProducts, singleProduct];         
        })
        this.setState(()=> {
            return {products: tempProducts}
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id) 
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {detailProduct: product}
        })
    }

    addToCart = (id) => {
        console.log(`hello from cart id is ${id}`)
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