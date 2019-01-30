import React,{Component} from 'react';
import Title from './Title';


class Home extends Component {
    state = {
        products: []
    }
    render() {
        return (
            <div className="app-header">
            <div style={{background: 'whitesmoke', height: '100px', display: 'flex', alignItems: 'center', width: 'inherit', marginLeft: '61px', color: '#282c34'}}>
            <h1 style={{marginLeft: '50px', textTransform: 'uppercase'}}>Shoppy Poppy</h1>
            </div>
            <div style={{display: 'flex', height: '89%',marginLeft: '60px'}}>
          
            <div style={{ display: 'flex', justifyContent: 'center', width: '100%'}}>
              <div>
                <Title name="Top" title="Products"/>
              </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Home;