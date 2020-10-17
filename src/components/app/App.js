import React from 'react';
import './App.css';
import Header from '../header/Header';
import HomeBody from '../homebody/HomeBody';
import CartBody from '../cartbody/CartBody';
import LoginBody from '../loginbody/LoginBody';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignupBody from '../signupbody/SignupBody';

class Home extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header />
        <HomeBody />
      </div>
    );
  }
}

class CartHome extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header />
        <CartBody />
      </div>
    );
  }
}
class SignupHome extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header />
        <SignupBody />
      </div>
     );
  }
}
class LoginHome extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div>
        <Header />
        <LoginBody />
      </div>
     );
  }
} 
class Naturalstore extends React.Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className="Naturalstore">
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={CartHome} />
          <Route path="/signup" component={SignupHome} />
          <Route path="/login" component={LoginHome} />
        </div>
      </Router>
        
     );
  }
}
 
export default Naturalstore;
