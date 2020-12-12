import React from 'react'
import { Button } from 'antd';



function Login ({handleClick}) {

    return (
            <Button type="primary" shape="round" href='/auth/google' onClick={handleClick}>Login</Button>
    )
} 

export default Login; 

