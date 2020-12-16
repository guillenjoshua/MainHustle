import React, {useState} from 'react';
import Login from './Login';
import Logout from './Logout'
import { Button, Badge } from 'antd';
import { UploadOutlined, ShoppingCartOutlined } from '@ant-design/icons';



const Header = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const handleClick = e => {
      setLoggedIn(!loggedIn);
    };



    return (

        <nav>
            <div className='nav-wrapper'>
                <a className="center brand-logo" href="/">
                    MainHustle
                </a>

                <ul className="right">

                    <li>
                        {loggedIn ? (
                            <Logout handleClick={handleClick} />
                        ) : (
                            <Login handleClick={handleClick} />
                        )}
                    </li>
                    <li>
                        <Button type="primary" shape="round" icon={<UploadOutlined />} href="/product/upload"></Button>
                    </li>
                    <li>
                        <Badge count={0} >
                        <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} href="/user/cart"></Button>
                        </Badge>
                    </li>
                
                    {/* <li>            
                        <a href='/auth/google'>Google Login</a>
                    </li>
                    <li>
                        <a href='/api/logout'>Logout</a>
                    </li> */}

                    <li>
                        <a href='/api/current_user'>User</a>
                    </li>
                </ul>

            </div>
        </nav>
    )

 
}

export default Header; 
