import React from 'react'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import FrontPage from './components/FrontPage'
import {BrowserRouter, Route} from 'react-router-dom'




export default () => {

    return (
    <div className='container'>
        <Header />
        <BrowserRouter>
        <div>
            <Route exact path='/' component={FrontPage} />
            <Route exact path='/dashboard' component={Dashboard} />
        </div>
        </BrowserRouter>
    </div>
    )


}