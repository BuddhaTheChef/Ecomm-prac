import React,{Component} from 'react';
import CartColums from './CartColums';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../context';
import CartList from './CartList';

class Checkout extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if(cart.length > 0) {
                            return (
                                <React.Fragment>
                                    <h1 style={{textAlign: 'center', paddingTop: '75px', marginBottom: '30px'}}>Your Cart</h1>
                                    <CartColums/>
                                    <CartList value={value} />
                                </React.Fragment>
                            )
                        }
                        else {
                            return (
                              <EmptyCart/>
                            )
                        }
                    }}
                </ProductConsumer>      
            </section>
        )
    }
}

export default Checkout;