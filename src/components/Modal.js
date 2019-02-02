import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
          {(value)=> {
              const {modalOpen, closeModal} = value;
              const {img, title, price} = value.modalProduct;
              if(!modalOpen) {
                  return null;
              }
              else {
                  return (
                      <div style={{position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                      <div className="container">
                        <div className="row">
                            <div style={{background: 'whitesmoke'}} id="modal" className="col-8 mx-auto col-md-6 col lg-4 text-center text-capitalize p-5">
                                <h5>item added to the cart</h5>
                                <img src={img} className="img-fluid" alt="product" />
                                <h5>{title}</h5>
                                <h5 className="text-muted">price: ${price}</h5>
                                <Link to='/'><button onClick={()=>closeModal()}>Continue Shopping</button></Link>
                                <Link to="/checkout"><button onClick={()=>closeModal()}>Go To Cart</button></Link>
                            </div>
                        </div>
                      </div>
                      </div>
                  )
              }
          }}
      </ProductConsumer>
    )
  }
}


