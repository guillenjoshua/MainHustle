import React from 'react'
import { Button } from 'antd';

function Logout (props) {


    // const handleLogout = (e) => {
    //     e.preventDefault();
    //     setLoggedIn(loggedIn);
    // }


    return (
        <Button type="primary" shape="round" href='/api/logout' onClick={props.handleClick}>Logout</Button>
    )
} 

export default Logout; 
