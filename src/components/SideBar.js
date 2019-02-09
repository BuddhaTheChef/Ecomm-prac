import React,{Component} from 'react';
import { ProductConsumer } from '../context';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'


class SideBar extends Component {
    constructor (props, context) {
        super(props, context)
        this.state = {
          horizontal: 10
        }
      }

      handleChangeHorizontal = value => {
        this.setState({
          horizontal: value
        })
      };

    
    render() {
        const { horizontal } = this.state
        return (
            
            <div>
            <div className="area"></div><nav className="main-menu">
            <ProductConsumer>
            {(value) => { 
             return (
            <ul>
                <li style={{color:'grey'}}>
                        <i className="search icon" style={{marginLeft:'-3px', marginRight: '6px'}}></i>
                        <span className="nav-text">
                            <input placeholder="Search"  style={{width:'171px',background:'black',border:'none',borderRadius:'8px',padding:'2px 4px'}}/>
                        </span>
                </li>
                <li className="has-subnav" style={{color:'grey'}}>
                    
                        <i className="dollar sign icon" style={{marginLeft:'-3px', marginRight: '6px'}}></i>
                        <span className="nav-text">
                         Filter Price
                        </span>
                        
        <Slider
          min={0}
          max={2000}
          value={horizontal}
          onChange={this.handleChangeHorizontal}
        />
        <div className='value'>${horizontal}</div>

                </li>
                <li className="drop-div" style={{color:'grey'}}>
                <div className="dropdown">
                       <i className="angle down icon" style={{marginLeft:'-3px', marginRight: '0px'}}></i>
                        <span className="nav-text">
                        <button className="dropbtn">Filter Type</button>
                        </span>       
                        <div className="dropdown-content">
                            <a href="/">Tech</a>
                            <a href="/">Clothes</a>
                            <a href="/">Accesories</a>
                            <a href="/">Art</a>
                            <a href="/">Other</a>
                        </div>                  
                </div>
                </li>
                <li className="has-subnav" style={{color:'grey'}}>
                       <i className="mobile alternate icon" style={{marginLeft:'-3px', marginRight: '6px'}}></i>
                        <span className="nav-text">
                        Tech
                        </span>
                </li>
                <li style={{color:'grey'}}>
                        <i className="tags icon" style={{marginLeft:'-3px', marginRight: '6px'}}></i>
                        <span className="nav-text">
                        Clothes
                        </span>
                </li>
                <li style={{color:'grey'}}>
                        <i className="headphones icon" style={{marginLeft:'-3px', marginRight: '6px'}}></i>
                        <span className="nav-text">
                        Accesories
                        </span>
                </li>
                <li style={{color:'grey'}}>
                       <i className="image icon" style={{marginLeft:'-3px', marginRight: '6px'}}></i>
                        <span className="nav-text">
                        Art
                        </span>
                </li>
                <li style={{color:'grey'}}>
                        <i className="gamepad icon" style={{marginLeft:'-3px', marginRight: '6px'}}></i>
                        <span className="nav-text">
                        Other Stuff
                        </span>
                </li>
            </ul>
            )}}
            </ProductConsumer>
        </nav>
            </div>
        )
    }
}

export default SideBar;