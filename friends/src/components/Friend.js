import React from 'react';
import axios from 'axios';
import {Route, withRouter, NavLink} from "react-router-dom";

import FriendCard from './FriendCard';
import FriendForm from './FriendForm';

class Friend extends React.Component {
    state = {
        friends: []
    };

    componentDidMount(){
        axios
        .get('http://localhost:5000/friends')
        .then(res => {
            this.setState({friends: res.data});
        })
        .catch(err => alert(`Oops! You got ${err}!`));
    }

    addFriend = friend =>{
        axios
        .post("http://localhost:5000/friends", friend)
        .then(res => this.setState({friends: res.data}))
        .catch(err => console.log(err));
        this.props.history.push(`/`)

    }

    render(){
        return (
            <>
            <div className="friends">
                <nav>
                    <h1>Friends List</h1>
                    <NavLink  to="/" >
                        Friend's List
                    </NavLink>
                    <NavLink to="/friend-form">Add Friend</NavLink>
                </nav>
                <div className="friend-holder">
                    <Route 
                    path="/friend-form"
                    render={props => <FriendForm {...props} addFriend={this.addFriend} />} />
                
                    {this.state.friends.map(friend => (
                    <FriendCard  friend={friend} key={friend.id}/>
                    ))}
                </div>
                
            </div>
             
             </>
        )
    }

}

const FriendWithRouter= withRouter(Friend);
export default FriendWithRouter;