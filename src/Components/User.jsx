import React from 'react';

function User(props) {
    const {user}=props;
    console.log(user)
    return (
        <div className="user-container">
            <img src={user.avatar} alt={user.first_name}/>
            <p><strong>Name: </strong>{user.first_name+" "+user.last_name}</p>
            <p><strong>e-mail:</strong> {user.email}</p>
        </div>
    );
}

export default User;