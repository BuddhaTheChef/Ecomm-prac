import React,{Component} from 'react';
// import Title from './Title';
import Product from '../components/Product'
import { ProductConsumer } from '../context';
 
class Home extends Component {
    render() {
        return (
            <div className="app-header">
            <div style={{height: '100px', background: 'whitesmoke', display: 'flex', alignItems: 'center', width: 'inherit', marginLeft: '61px', color: '#282c34'}}>
            <strong><h1 className="main-title">Shoppy Poppy</h1></strong>
            </div>
            <div style={{ marginLeft: '60px'}} className="gridStuff">
                {/* <Title name="Hot" title="Items"/> */}
            
                    <ProductConsumer>
                        {(value)=> {
                            return value.products.map((product) => {
                                return <Product key={product.id} product={product}/>
                            })
                        }}
                    </ProductConsumer>
            </div>
            </div>
        )
    }
}

export default Home;