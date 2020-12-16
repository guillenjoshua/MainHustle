import React, { useContext, useEffect, useState } from 'react';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import {Button, Card} from 'antd'
// import Axios from 'axios'


function ProductCart(props) {

// const productId = props.match.params.productId
// const [product, setProduct] = useState([]);
const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);
  

//   useEffect(() => {

//     Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
//         .then(response => {
//             setProduct(response.data[0])
//         })
//     }, [])


    return (

        <div >
        
               <br />

                <div className="row no-gutters justify-content-center">
                    <div className="col-sm-9 p-3">
                        {
                            cartItems.length > 0 ?
                            <CartProducts/> :
                            <div className="p-3 text-center text-muted">
                                Your cart is empty
                            </div>
                        }
                            <br />
                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Thanks for Using MainHustle</p>
                                <Link to="/Dashboard" className="btn btn-outline-success btn-sm">Keep Shopping Yo</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <Card>
                                <p className="mb-1">Total Items</p>
                                <h4 className=" mb-3 txt-right">{itemCount}</h4>
                                <p className="mb-1">Total Payment</p>
                                <hr className="my-4"/>
                                <div className="text-center">
                                    <Button type="primary" shape="round" onClick={handleCheckout}>CHECKOUT</Button>
                                    <Button type="danger" shape="round" onClick={clearCart}>CLEAR</Button>
                                </div>

                            </Card>
                        </div>
                    }
                    
                </div>



        </div>
      
    )
}

export default ProductCart;
