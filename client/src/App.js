import React from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import FrontPage from './components/FrontPage'
import {BrowserRouter, Route, Switch} from 'react-router-dom'




export default () => {

    return (
    <div className='container'>
        
        
        <BrowserRouter>
       
        <Header />
        <div>
            <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route exact path='/dashboard' component={Dashboard} />
            </Switch>
        </div>
      
        </BrowserRouter>
        
    </div>
    )


}