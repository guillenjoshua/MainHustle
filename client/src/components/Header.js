import React, {useState, useEffect, useContext} from 'react';
import Login from './Login';
import Logout from './Logout';
import { CartContext } from '../contexts/CartContext';
import {Link} from 'react-router-dom'
import { Button, Badge } from 'antd';
import { UploadOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import M from "materialize-css/dist/js/materialize.min.js";
import Axios from "../utils/api"


const Header = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    const { itemCount } = useContext(CartContext);

    useEffect(() => {
        Axios.getCurrentUser().then(user => {
            console.log(user.data)
            if (user.data.email) {
                setLoggedIn(true)
            }else{
                setLoggedIn(false)
            }
        })
    },[])

    const handleClick = e => {
      setLoggedIn(!loggedIn);
    };


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


                    </li>
                    <li>
                       <Link to="/dashboard" ><Button type="primary" shape="round" >Search</Button></Link> 
                    </li>
                    <li>
                    <Link to="/product/upload" ><Button type="primary" shape="round" icon={<UploadOutlined />}></Button></Link>
                    </li>
                    <li>
                    <Link to="/user/cart" >
                        
                        <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} href="/user/cart"></Button>
                        
                    </Link>
                    </li>
                
                    {/* <li>
                        <a href='/api/current_user'>User</a>
                    </li> */}
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
            
                <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} href="/user/cart"></Button>
            
            <li><div className="divider"></div></li>

        </ul>
    
    </div>


    )
 
}

export default Header; 
