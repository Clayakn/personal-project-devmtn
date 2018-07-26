import React, { Component } from 'react';


class Auth extends Component {
    login() {
        const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback')
        window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
      }
    render(){
        return(
            <div>
            <p>Please Login</p>
            <button onClick={() => {this.login()}}>Login</button>
            </div>
        )
    }
    
}

export default Auth;