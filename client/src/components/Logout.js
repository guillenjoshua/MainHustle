import React from 'react'


function Logout ({handleClick}) {

    return (
        <a href='/api/logout' onClick={handleClick}>Logout</a>
    )
} 

export default Logout; 
