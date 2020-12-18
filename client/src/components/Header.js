import React, {useState, useEffect, useContext} from 'react';
import Login from './Login';
import Logout from './Logout';
import { CartContext } from '../contexts/CartContext';

import { Button, Badge } from 'antd';
import { UploadOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import M from "materialize-css/dist/js/materialize.min.js";



const Header = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const { itemCount } = useContext(CartContext);


    const handleClick = e => {
      setLoggedIn(!loggedIn);
    };

    // const handleLogout = (e) => {
    //     e.preventDefault();
    //     setLoggedIn(false);
    // }



    useEffect(() => {
        const M = window.M;
       
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          
    },[])


    return (
    <div>

        <nav className="red" style={{padding: "0px 10px"}}>
            <div className='nav-wrapper'>
            <a href="/" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                <a className="brand-logo" href="/">
                    MainHustle
                </a>
              

                <ul id="nav-mobile" className="right hide-on-med-and-down">

                    <li>
                        {loggedIn ? (
                            
                            <Logout handleClick={handleClick} />
                            
                        ) : (
                            <Login handleClick={handleClick} />
                        )}

                        {/* {loggedIn ? (
                            
                            <Logout
                            loggedIn={loggedIn} 
                            handleLogout={handleLogout}
                            />
                            
                        ) : (
                            <Login
                            loggedIn={loggedIn} 
                            handleLogout={handleLogout}
                            />
                        )} */}




                    </li>
                    <li>
                        <Button type="primary" shape="round" href="/dashboard">Search</Button>
                    </li>
                    <li>
                        <Button type="primary" shape="round" icon={<UploadOutlined />} href="/product/upload"></Button>
                    </li>
                    <li>
                        <Badge count={itemCount} >
                        <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} href="/user/cart"></Button>
                        </Badge>
                    </li>
                
                    <li>
                        <a href='/api/current_user'>User</a>
                    </li>
                </ul>

            </div>
        </nav>

      

        <ul id="slide-out" className="sidenav">

            <li className="subheader">Login/Logout</li>
            <li>
            {loggedIn ? ( 
                <Logout handleClick={handleClick} />
                ) : (
                <Login handleClick={handleClick} />
                )}
            </li>

            <li><div className="divider"></div></li>

            <li className="subheader">Search Products</li>
            <Button type="primary" shape="round" href="/dashboard">Search</Button>
            <li></li>
            
            <li><div className="divider"></div></li>

            <li className="subheader">Upload Product</li>
            <Button type="primary" shape="round" icon={<UploadOutlined />} href="/product/upload"></Button>

            <li><div className="divider"></div></li>

            <li className="subheader">Go to Cart</li>
            <Badge count={0} >
                <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} href="/user/cart"></Button>
            </Badge>
            <li><div className="divider"></div></li>

        </ul>
        



    
    </div>


    )

 
}

export default Header; 
