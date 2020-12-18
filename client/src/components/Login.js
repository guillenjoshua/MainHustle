import React from 'react'
import { Button } from 'antd';



function Login (props) {

    // const handleLogout = (e) => {
    //     e.preventDefault();
    //     setLoggedIn(!loggedIn);
    // }

    return (
            <Button type="primary" shape="round" href='/auth/google' onClick={props.handleClick}>Login</Button>
            // <Button type="primary" shape="round" href='/auth/google' onClick={handleLogout}>Login</Button>
    )
} 

export default Login; 

