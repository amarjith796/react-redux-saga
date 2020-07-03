import React from 'react';

const UsersComponent = (props) =>{
    const {username} = props;
    return(
        <div>
            Hello, {username}
        </div>
    )
}

export default UsersComponent;