import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';
import PropTypes from 'prop-types';

export default class Product extends Component {
  render() {
      const {id, title, img, price, inCart} = this.props.product;
    return (
      <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">

        <ProductConsumer>
            {(value) => (
        <div className="img-container" onClick={()=> value.handleDetail(id)}>
            <Link to="/items">
            <img src={img} alt="product" className="card-img-top"/>
            </Link>
            <button 
                className="cart-btn"
                style={{width: '100%'}} 
                disabled={inCart ? true : false} 
                onClick={()=> {value.addToCart(id);
             }}>
               {inCart
                ?
                (<p className="text-capitalize" disabled> {" "} In Cart</p>)
                : 
                (<i className="cart plus icon"></i>
                )}
             </button>    
        </div>
        )}
        </ProductConsumer>

        <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0" style={{color:'black'}}>{title}</p>
            <h5 className="font-italic mb-0" style={{color:'blue'}}><span>$</span>{price}</h5>
        </div>
        </div>
       
      </div>
    )
  }
}


Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}