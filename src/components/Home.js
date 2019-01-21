import React,{Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="app-header">
            <div style={{background: 'whitesmoke', height: '100px', display: 'flex', alignItems: 'center', width: 'inherit', marginLeft: '61px', color: '#282c34'}}>
            <h1 style={{marginLeft: '50px'}}>Shop-if-why</h1>
            </div>
            <div style={{display: 'flex', height: '89%',marginLeft: '60px'}}>
          
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                maincontent
            </div>
            </div>
            </div>
        )
    }
}

export default Home;