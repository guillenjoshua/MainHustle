import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import FrontPage from './components/FrontPage'
import ProductPage from './components/ProductPage'
import ProductUpload from './components/ProductUpload'




export default () => {

    return (
    <div className='container'>
        
        
        <BrowserRouter>
       
        <Header />
        <div>
            <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/product/upload' component={ProductUpload} />
            <Route exact path='/product/:productId' component={ProductPage} />
            </Switch>
        </div>
      
        </BrowserRouter>
        
    </div>
    )
}