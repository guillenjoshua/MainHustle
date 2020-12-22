import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../contexts/CartContext';
import axios from 'axios'
import {Button} from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined } from '@ant-design/icons';



const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    const [products, setProducts] = useState([])


    useEffect(() => {
       
        axios.get("/api/product/cart")
        .then(response => {
            if (response.data.success) {
                setProducts(response.data.products)
            } 
        })

    }, [])


    // Code that works with Dev/Prod If Statement
    // let  picture = product.image.join("").split("\\")
    // let imageSrc = ""
    // console.log(picture)
    // let pictureTwo = picture[picture.length-1].split("build")

    // if( process.env.NODE_ENV === "production") {
    //     // If on heroku use one path
    //     let deployeImageUrl= picture[picture.length-1].split("build")
    //     imageSrc = deployeImageUrl[deployeImageUrl.length-1]
    //   } else {
    //     // If local use other path
        
    //     let pictureTwo = picture[picture.length-1].split("public")
    //     imageSrc = encodeURI(pictureTwo[pictureTwo.length-1])
    //   }
    
    //Original code that works on Heroku
    let  picture = product.image.join("").split("\\")
    let pictureTwo = picture[picture.length-1].split("build")


    return ( 
       
        <div className="row no-gutters py-2">
            <div className="col-sm-2 p-2">
                <img
                alt={products.name}
                style={{margin: "0 auto", maxHeight: "100px"}} 
                
                //Original Code that works on Heroku
                src={`${pictureTwo[pictureTwo.length-1]}`} className="img-fluid d-block"/>

                {/* Code that works with Dev/Prod If Statement */}
                {/* src={`${imageSrc}`} className="img-fluid d-block"/> */}
                
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
                 onClick={() => 
                    increase(product)
                    }
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
                    onClick={() => {
                        removeProduct(product)
                        }}
                    type="danger" shape="round">
                        <DeleteOutlined width={"20px"}/>
                    </Button>
                 }
                 
            </div>
        </div>
      
     );
}
 
export default CartItem;
