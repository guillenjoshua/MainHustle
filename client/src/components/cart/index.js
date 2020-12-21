import React, { useContext } from 'react';

import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';
import {Button, Card} from 'antd'
import StripeCheckout from 'react-stripe-checkout';
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
                                {/* Your Cart is Empty */}
                            </div>
                        }
                            <br />
                        { checkout && 
                            <div className="p-3 text-center text-success">
                                <p>Thanks for Using MainHustle</p>
                            <StripeCheckout
                                amount={total}
                                billingAddress
                                description="MainHustle Payment"
                                // image="https://yourdomain.tld/images/logo.svg"
                                locale="auto"
                                // name="YourDomain.tld"
                                // stripeKey="your_PUBLISHABLE_stripe_key"
                                // token={this.onToken}
                                zipCode
                            />
                            <br />
                            <br />
                                <Link to="/Dashboard" className="btn btn-outline-success btn-sm">Keep Shopping</Link>
                            </div>
                        }
                    </div>
                    {
                        cartItems.length > 0 && 
                        <div className="col-sm-3 p-3">
                            <Card>
                                <p className="mb-1">Total Items</p>
                                <h5 className=" mb-3 txt-right">{itemCount}</h5>
                                <p className="mb-1">Total Payment</p>
                                <h5 className=" mb-3 txt-right">${total}</h5>
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
