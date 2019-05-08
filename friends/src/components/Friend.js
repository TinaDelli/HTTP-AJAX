import React from 'react';
import axios from 'axios';

import FriendCard from './FriendCard';

class Friend extends React.Component {
    state = {
        friends: []
    };

    componentDidMount(){
        axios
        .get('http://localhost:5000/friends')
        .then(res => {
            console.log(res.data);
            this.setState({friends: res.data});
        })
        .catch(err => console.log(err));
    }

    render(){
        return (
            <div className="friends">
                <h1>Friends List</h1>
                    <div className="friend-holder">
                        {this.state.friends.map(friend => (
                        <FriendCard  friend={friend}/>
                        ))}
                    </div>
            </div>
        )
    }

}

export default Friend;