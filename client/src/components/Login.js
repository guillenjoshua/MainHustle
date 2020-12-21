import React from 'react'
import { Button } from 'antd';



function Login (props) {

    return (
           
            <Button type="primary" shape="round" href='/auth/google' onClick={props.handleClick}>Login</Button>
    )
} 

export default Login; 

