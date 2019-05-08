import React from 'react';

const FriendCard  = props => {
    return (
        <div key={props.friend.id} className="friend-card">
        <h2>{props.friend.name}</h2>
               <p>{props.friend.age}</p>
               <p>{props.friend.email}</p>
        </div>
    )

}


export default FriendCard;