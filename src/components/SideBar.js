import React,{Component} from 'react';
import { ProductConsumer } from '../context';


class SideBar extends Component {
    render() {
        return (
            
            <div>
            <div className="area"></div><nav className="main-menu">
            <ProductConsumer>
            {(value) => { console.log(value)
             return (
            <ul>
                <li>
                    <a href="/">
                        <i className="search icon"></i>
                        <span className="nav-text">
                            <input placeholder="Search" value=""/>
                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a href="/">
                        <i className="dollar sign icon"></i>
                        <span className="nav-text">
                         Filter Price
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="/">
                       <i className="angle down icon"></i>
                        <span className="nav-text">
                        Filter Type
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="/">
                       <i className="mobile alternate icon"></i>
                        <span className="nav-text">
                        Tech
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="/">
                        <i className="tags icon"></i>
                        <span className="nav-text">
                        Clothes
                        </span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="headphones icon"></i>
                        <span className="nav-text">
                        Accesories
                        </span>
                    </a>
                </li>
                <li>
                   <a href="/">
                       <i className="image icon"></i>
                        <span className="nav-text">
                        Art
                        </span>
                    </a>
                </li>
                <li>
                   <a href="/">
                        <i className="gamepad icon"></i>
                        <span className="nav-text">
                        Other Stuff
                        </span>
                    </a>
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