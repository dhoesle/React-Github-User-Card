import React from 'react'


function User(props) {
    return (
        <div className='user-card'>
           <h1>{props.users.login}</h1>
        </div>
    )
}

export default User