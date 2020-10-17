import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Header extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
          <div class="container-fluid">
            <ul  class="nav navbar-nav" >
              <li class="nav-brand active" >
                <a class="nav-link"  href="#">Natural Store</a>
              </li> 
              <li class="active">
                  <a class="nav-link" href="/">Home</a>
              </li>
              <ul class="nav navbar-nav navbar-right">
                <a  class="text-light m-2" href="/cart">Cart</a>     
              </ul>
              <li>
                <a  class="text-light m-2" href="/signup">signup</a>
              </li>
              <li>
                <a  class="text-light m-2" href="/login">login</a>
              </li>
            </ul>  
          </div>
        </nav>
      </div>  
     );
  }
}
 
export default Header;
