import React, { Component } from 'react';
import './SignupBody.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class SignupBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Username: '', Password: ''};
    
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleUsernameChange(event) {
        this.setState({Username: event.target.value});
    }
    handlePasswordChange(event) {
        this.setState({Password: event.target.value});
    }
    handleSubmit(event) {
        console.log("Username :" + this.state.Username);
        console.log("Password :" + this.state.Password);  
        event.preventDefault();
        axios.post('http://localhost:8080/users', {"username": this.state.Username,"password": this.state.Password})
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
        this.props.history.push('/login')
    }  
    render() { 
        return ( 
            <div class='body'>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username :
                        <input type="text" value={this.state.Username} onChange={this.handleUsernameChange}/> 
                    </label>
                    <label>
                        Password :
                        <input type="text" value={this.state.Password} onChange={this.handlePasswordChange} />
                    </label>
                    <input type="submit" value="signup" />
                </form>
            </div>
         );
    }
}
 
export default withRouter(SignupBody);