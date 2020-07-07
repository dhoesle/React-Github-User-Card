import React from 'react'


function User(props) {
    return (
        <div className='card'>
            <img src={props.users.avatar_url}></img>
            <div className='card-info'>
            <p className='name'>{props.users.name}</p>
            <h2 className='username'>{props.users.login}</h2>
            <p>Location: {props.users.location}</p>
            <p>Profile: {props.users.html_url}</p>
            <p>Followers: {props.users.followers}</p>
            <p>Following: {props.users.following}</p>
            <p>Bio: {props.users.bio}</p>


            </div>

        </div>
    )
}

export default User