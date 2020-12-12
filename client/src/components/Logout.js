import React from 'react'
import { Button } from 'antd';

function Logout ({handleClick}) {

    return (
        <Button type="primary" shape="round" href='/api/logout' onClick={handleClick}>Logout</Button>
    )
} 

export default Logout; 
