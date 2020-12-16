import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import {Button} from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';



const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);


    

    let  picture = product.image.join("").split("\\")



    return ( 
       
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                alt={product.name}
                style={{margin: "0 auto", maxHeight: "100px"}} 
                src={`/uploads/${picture[picture.length-1]}`} className="img-fluid d-block"/>
            </div>
            <div className="col-sm-4 p-2">
                <h5 className="mb-1">{product.title}</h5>
                <p className="mb-1">Price: ${product.price} </p>
                
            </div>
            <div className="col-sm-2 p-2 text-center ">
                 <p className="mb-0">Qty: {product.quantity}</p>
            </div>
            <div className="col-sm-4 p-2 text-right">
                 <Button 
                 onClick={() => increase(product)}
                 type="primary" shape="round">
                     <PlusOutlined width={"20px"}/>
                 </Button>

                 {
                     product.quantity > 1 &&
                     <Button
                    onClick={() => decrease(product)}
                    type="primary" shape="round">
                        <MinusOutlined width={"20px"}/>
                    </Button>
                 }

                {
                     product.quantity === 1 &&
                     <Button
                    onClick={() => removeProduct(product)}
                    type="danger" shape="round">
                        <DeleteOutlined width={"20px"}/>
                    </Button>
                 }
                 
            </div>
        </div>
      
     );
}
 
export default CartItem;