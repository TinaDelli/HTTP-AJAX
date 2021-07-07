import React from 'react';

const FriendCard = props =>  {


    
    return (
        <div className="friend-card">
            <h2>{props.friend.name}</h2>
            <p>{props.friend.age}</p>
            <p>{props.friend.email}</p>
            <button onClick={() => props.deleteFriend(props.friend.id)} className="md-button">
                Delete Item
            </button>
            <button onClick={() => props.setUpdateForm(props.friend)} className="md-button">
                Update Item
            </button>
        </div>
       
    )
}

export default FriendCard;