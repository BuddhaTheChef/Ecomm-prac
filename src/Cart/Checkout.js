import React,{Component} from 'react';
import CartColums from './CartColums';

class Checkout extends Component {
    render() {
        return (
            <section>
                <h1 style={{textAlign: 'center', paddingTop: '75px', marginBottom: '30px'}}>Your Cart</h1>
                <CartColums/>
            </section>
        )
    }
}

export default Checkout;