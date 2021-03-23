import React from 'react';

const UsersComponent = (props) =>{
    console.log("hello world");
    const {username} = props;
    return(
        <div>
            Hello, {username}
        </div>
    )
}

export default UsersComponent;