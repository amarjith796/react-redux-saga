import React, {useEffect,useState} from 'react';

import {NavLink} from 'react-router-dom';

const HeaderComponent = (props) =>{
        
    const calculateDateTime = () => {
        let date = new Date();        
        return (date.toLocaleDateString() + ' ' + date.toLocaleTimeString());
    };

    const [timer, setTimer] = useState(calculateDateTime());
    
    useEffect(() => {
        setTimeout(() => {
            setTimer(calculateDateTime());
        }, 1000);
      });
    
    return(
        <nav style={{background:'burlywood',padding:'1px'}}>
            <ul className='headerlist' style={{margin:'0',}}>
                <li style={{listStyle:'none'}}>
                    <NavLink to='/' exact activeStyle={{color: 'green'}} > Home</NavLink>
                </li>
                <li className= {(props.loggedIn ? 'show':'hidden')}>
                    <NavLink to='/counter/' exact activeStyle={{color: 'green'}} > Counter</NavLink>
                </li>
                <li className= {(props.loggedIn ? 'show':'hidden')}>
                    <NavLink to='/user/john' exact activeStyle={{color: 'green'}} > User John</NavLink>
                </li>
                <li className= {(props.loggedIn ? 'show':'hidden')}>
                    <NavLink to='/user/peter' exact activeStyle={{color: 'green'}} > User Peter</NavLink>
                </li>
                <li className= {(props.loggedIn ? 'show':'hidden')}>
                    <NavLink to='/users' exact activeStyle={{color: 'green'}} > Users List</NavLink>
                </li>
                <li style={{listStyle:'none'}}>
                    <input type="button" value={(props.loggedIn ? 'Log Out':'Log In')} onClick={props.loginHandle} />
                    {timer ? timer : null}
                </li>
            </ul>
        </nav>
    )
}

export default HeaderComponent;