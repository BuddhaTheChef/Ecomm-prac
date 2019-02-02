import React,{Component} from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';

class Items extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=> {
                const {id,img, info, price, title, inCart, type} = value.detailProduct;
                return (
                 <div style={{ background: '#212529', height: '-webkit-fill-available'}}>
                    <div className="container">
                        <div className="row">
                            
                        </div>
                    </div>
                    <div className="row" style={{marginTop: '120px', padding: '50px', marginLeft: '122px', background: 'whitesmoke', marginRight:'57px',borderRadius: '8px'}}>
                        <div className="col-10 max-auto col-md-6 my-3">
                          <img src={img} alt="product" className="img-fluid"/>  
                        </div>
                        <div className="col-10 max-auto col-md-6 my-3">
                          <h2>{title}</h2>
                          <h5 className="text-uppercase text-muted mt-3 mb-2">
                            type: <span>{type}</span>
                          </h5>
                          <h5>
                              price: <span>$</span>{price}
                          </h5>
                          <p className="text-capitalize font-weight-bold mt-3 mb-0">
                          Info: 
                          </p>
                          <p className="text-muted lead">{info}</p>
                          <div>
                              <Link to="/"><button>Back To Products</button></Link>
                              <button disabled={inCart? true: false} onClick={()=>{
                                  value.addToCart(id);
                                  value.openModal(id);
                              }}>
                                  {inCart? 'In Cart': 'Add to Cart'}
                              </button>
                          </div>
                        </div>
                    </div>
                 </div>
                )
                }}
            </ProductConsumer>
        )
    }
}

export default Items;