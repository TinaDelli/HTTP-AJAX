import React from "react";

class UpdateForm extends React.Component {
    state={
        friend: this.props.activeFriend
        // friend: {
        //     name: "",
        //     age: "",
        //     email: "",
        //     id: Date.now(),
        // }
    };

    handleChanges = event =>{
    this.setState( {
        friend: {
            ...this.state.friend,
            [event.target.name]: event.target.value
        }
    });
}

    handleSubmit = event => {
        event.preventDefault();
        this.props.updateFriend(this.state.friend);
        // console.log(this.state)
    }

render(){
    console.log(this.props.activeFriend.name)
    return (
            <div>
                <h1>Update Friend Info</h1>
                <form onSubmit={this.handleSubmit}>
                    <label >Name</label>
                    <input type='text' placeholder="Name" onChange={e => this.handleChanges(e)} value= {this.state.friend.name} name="name" />
                    <label >Age</label>
                    <input type="number" placeholder="Age" onChange={e => this.handleChanges(e)} value= {this.state.friend.age} name="age" />
                    <label >Email</label>
                    <input type="email" placeholder="Email" onChange={e => this.handleChanges(e)} value= {this.state.friend.email} name="email" />
                    <button>Update Friend Info</button>
                </form>
            </div>
            )
        }
    }

    export default UpdateForm;