import React from 'react';



const Header = () => {

    return (

        <nav>
            <div className='nav-wrapper'>
                <a className="center brand-logo">
                    MainHustle
                </a>
                <ul className="right">
                    <li>
                        <a href='/auth/google'>Google Login</a>
                    </li>
                    <li>
                        <a href='/api/logout'>Logout</a>
                    </li>
                    <li>
                        <a href='/api/current_user'>User</a>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Header; 
