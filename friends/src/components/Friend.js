import React from 'react';
import axios from 'axios';
import {Route, withRouter, NavLink} from "react-router-dom";

import FriendCard from './FriendCard';
import FriendForm from './FriendForm';
import UpdateForm from './UpdateForm';

class Friend extends React.Component {
    state = {
        friends: [],
        activeFriend: {}
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

    updateFriend = updatedFriend => {
        axios
        .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
        .then(res => this.setState({
            friends: res.data
        }))
        .catch(err => console.log(err));
        this.props.history.push(`/`)
    }

    deleteFriend = id => {
        axios
        .delete(`http://localhost:5000/friends/${id}`)
        .then(res => this.setState({friends:res.data}))
        .catch(err => console.log(err));
        this.props.history.push('/');
    }

    setUpdateForm = friend => {
        this.setState({activeFriend: friend});
        this.props.history.push('/update-form')
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
                    <Route 
                    exact
                    path= "/update-form"
                    render={props => (<UpdateForm {...props} updateFriend ={this.updateFriend} activeFriend={this.state.activeFriend}/>)}
                    />
                
                    {this.state.friends.map(friend => (
                    <FriendCard  friend={friend} key={friend.id} deleteFriend={this.deleteFriend} setUpdateForm={this.setUpdateForm} />
                    ))}
                </div>
                
            </div>
             
             </>
        )
    }

}

const FriendWithRouter= withRouter(Friend);
export default FriendWithRouter;