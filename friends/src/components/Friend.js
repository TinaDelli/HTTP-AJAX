import React from 'react';
import axios from 'axios';

import FriendCard from './FriendCard';

class Friend extends React.Component {
    state = {
        friends: [],
        friend: {
            name: "",
            age: "",
            email: "",
            id: "",
        }
    };

    componentDidMount(){
        axios
        .get('http://localhost:5000/friends')
        .then(res => {
            this.setState({friends: res.data});
        })
        .catch(err => console.log(err));
    }

    handleChanges = e => {
        this.setState({
            friend: {...this.state.friend,
            [e.target.name]: e.target.value
            }
        })
    }

    addFriend = e =>{
        e.preventDefault();
        this.setState({
            friends: [...this.state.friends, this.state.friend],
            friend: {
                name:"",
                age: "",
                email:"",
                id:Date.now()
            }
        })
    }

    render(){
        return (
            <div className="friends">
                <h1>Friends List</h1>
                    <div className="friend-holder">
                        {this.state.friends.map(friend => (
                        <FriendCard  friend={friend} key={friend.id}/>
                        ))}
                        <form onSubmit={this.addFriend}>
                            <h1>Have A New Friend?</h1>
                            <label for="name">Name</label>
                            <input type="text" placeholder="Name" onChange={this.handleChanges} value= {this.state.friend.name} name="name"></input>
                            <label for="age">Age</label>
                            <input type="text" placeholder="Age" onChange={this.handleChanges} value= {this.state.friend.age} name="age"></input>
                            <label for="email">Email</label>
                            <input type="text" placeholder="Email" onChange={this.handleChanges} value= {this.state.friend.email} name="email"></input>
                            <button>Add New Friend</button>
                        </form>
                    </div>
            </div>
        )
    }

}

export default Friend;