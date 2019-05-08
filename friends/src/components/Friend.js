import React from 'react';
import axios from 'axios';

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
               {this.state.friends.map(friend => (
               <>
               
               <h2 key={friend.id}>{friend.name}</h2>
               <p>{friend.age}</p>
               <p>{friend.email}</p>
               </>
               ))}
            </div>
        )
    }

}

export default Friend;