import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            profilePicture: '',
            titles: []
        }
    }

    componentDidMount() {
        axios.get('/api/user-data-title').then(response => {
            console.log('response.data',response.data)
            this.setState({
                titles: response.data.titles,
                username: response.data.username,
                profilePicture: response.data.profilePicture 
            })
        })
    }
    render() {
      return (
        <div>
            Profile
            <p>{this.state.username}</p>
            <img src={this.state.profilePicture} alt="profile from login information"/>
            <p>{this.state.titles}</p>
        </div>
      );
    }
}


export default Profile;