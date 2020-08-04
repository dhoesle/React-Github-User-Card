import React from 'react'


class User extends React.Component {
    render () {
        return (
            <div>
                <div className='card'>
                    <img src={this.props.users.avatar_url}></img>
                    <div className='card-info'>
                        <p className='name'>{this.props.users.name}</p>
                        <h2 className='username'>{this.props.users.login}</h2>
                        <p>Location: {this.props.users.location}</p>
                        <p>
                            {'Profile: '}
                            <a href={this.props.users.html_url}>{this.props.users.html_url}</a> 
                        </p>
                        <p>Followers: {this.props.users.followers}</p>
                        <p>Following: {this.props.users.following}</p>
                        <p>Bio: {this.props.users.bio}</p>
                    </div>
    
                </div>
                <div className='followers'>
                    {this.props.followers.map(followers => (
                        <div className='card'>
    
                            <img src={followers.avatar_url}></img>
                            <p>{followers.login}</p>
                        </div>
                    ))}
                </div>
    
            </div>
        )

    }
}

export default User