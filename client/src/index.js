import 'materialize-css/dist/css/materialize.min.css'
import 'antd/dist/antd.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from  './App'

// import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';



ReactDOM.render(
<CartContextProvider>
<App />
</CartContextProvider>
, document.querySelector('#root'))