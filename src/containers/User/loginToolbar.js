import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../helpers/UserContext';

class LoginToolbar extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {({user, signOutUser}) => user.signedIn ? <p>
             <span>You are logged in as {user.name}</span>
             | <Link to="#" onClick={() => signOutUser()}>Log out</Link>
           </p> : <p>
           <Link to="/user/register">Register</Link>/
           <Link to="/user/login">Log in</Link>
         </p>}
      </UserContext.Consumer>
    );
  }
}

export default LoginToolbar;
