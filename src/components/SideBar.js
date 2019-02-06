import React,{Component} from 'react';

class SideBar extends Component {
    render() {
        return (
            <div>
            <div className="area"></div><nav className="main-menu">
            <ul>
                <li>
                    <a href="/">
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                            Search
                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a href="/">
                        <i className="fa fa-laptop fa-2x"></i>
                        <span className="nav-text">
                         Price
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="/">
                       <i className="fa fa-list fa-2x"></i>
                        <span className="nav-text">
                        Filter Type
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="/">
                       <i className="fa fa-folder-open fa-2x"></i>
                        <span className="nav-text">
                        Tech
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="/">
                        <i className="fa fa-bar-chart-o fa-2x"></i>
                        <span className="nav-text">
                        Clothes
                        </span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="fa fa-font fa-2x"></i>
                        <span className="nav-text">
                        Accesories
                        </span>
                    </a>
                </li>
                <li>
                   <a href="/">
                       <i className="fa fa-table fa-2x"></i>
                        <span className="nav-text">
                        Art
                        </span>
                    </a>
                </li>
                <li>
                   <a href="/">
                        <i className="fa fa-map-marker fa-2x"></i>
                        <span className="nav-text">
                        Stuff
                        </span>
                    </a>
                </li>
            </ul>
        </nav>
            </div>
        )
    }
}

export default SideBar;