import React from 'react';
import { Container } from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';

const NavBar = () => {
    return (
       <Container className="nav-container">
         <Link  to='/' className="nav-links">Home</Link>
         <Link  to='/search' className="nav-links">Search</Link>
         <Link  to='/items' className="nav-links">Saved</Link>
         <Link  to='/checkout' className="nav-links">Checkout</Link>
       </Container>
    );
}
export default withRouter(NavBar);