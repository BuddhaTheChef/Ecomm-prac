import React,{Component} from 'react';
import Title from './Title';
import Product from '../components/Product'
import { ProductConsumer } from '../context';
 
class Home extends Component {
    render() {
        return (
            <div className="app-header">
            <div style={{height: '100px', background: 'whitesmoke', display: 'flex', alignItems: 'center', width: 'inherit', marginLeft: '61px', color: '#282c34'}}>
            <h1 style={{marginLeft: '50px', textTransform: 'uppercase'}}>Shoppy Poppy</h1>
            </div>
            <div className="py-5" style={{ marginLeft: '60px'}}>
          
            <div>
              <div className="container">
                <Title name="Top" title="Products"/>
                <div className="row" style={{marginTop: '25px'}}>
                    <ProductConsumer>
                        {(value)=> {
                            return value.products.map((product) => {
                                return <Product key={product.id} product={product}/>
                            })
                        }}
                    </ProductConsumer>
                </div>
              </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Home;