import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import FrontPage from './components/FrontPage'
import ProductPage from './components/ProductPage'
import ProductUpload from './components/ProductUpload'
import ProductCart from './components/cart'




export default () => {
    // const [loggedIn, setLoggedIn] = useState(
    //     // initial value
    //     document.cookie.split(';').some((item) => item.trim().startsWith('logedIn=')));



    return (
    <div className="container">
        
        
        <BrowserRouter>
       
        <Header />
            <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/product/upload' component={ProductUpload} />
            <Route exact path='/product/:productId' component={ProductPage} />
            <Route exact path='/user/cart' component={ProductCart} />
            {/* <Route exact path='/login' render={
            (routeProps) => <LogIn {...{setLoggedIn, ...routeProps}} />
            } /> */}

            </Switch>
          
        </BrowserRouter>
        
    </div>
    )
}