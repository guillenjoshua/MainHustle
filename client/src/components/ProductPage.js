import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Row, Col, Descriptions, Button } from 'antd'
// import ImageGallery from 'react-image-gallery';
import  {CartContext} from '../contexts/CartContext';



function ProductPage(props) {

 
    const productId = props.match.params.productId
    const [product, setProduct] = useState([])
    const { addProduct, cartItems, increase } = useContext(CartContext);

    console.log(product.image)
    useEffect(() => {

        axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
                console.log(response.data[0])
            })
    },[])



            
        const handleClick = (product) =>{
             console.log(product, "product")   
            axios.post('/api/product/cart', product)
            .then(response => {
                // if (response.data.success) {
                //     alert('Product Successfully Added to Cart')
                //     props.history.push('/dashboard')
                // } else {
                //     alert('Failed to Add to Cart')
                // }

            })
        }

        // const originalGallery = product.image ? product.image.join("").split("public")[1] : ""

        // const images = [
            
        //     {
        //     original: originalGallery 
        //     }
        // ]

        // let picture = product.image.join("").split("public")[1]

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
        }

    return (
        <div style={{width: '100%', padding: '3rem 4rem'}}>
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                <h4>{product.title}</h4>
            </div>
        <br />

    

    <Row gutter={[16, 16]}>
            {/* <Col lg={12} xs={24}> */}
                    {/* Product Image */}

               {/* <ImageGallery  items={images}/> */}

            

            
                <img style={{width: '50%'}} alt="ProductImg" src={product.image ?  product.image.join("").split("build")[1] ? product.image.join("").split("build")[1] : product.image.join("").split("public")[1] : ""} /> 
              { product.image ? console.log(product.image.join("").split("public")[1]) : ""}
                
            {/* </Col> */}
            <Col lg={24} xs={24}>



                <Descriptions
                    title="Product Info"
                    bordered
                    layout="vertical"
                    >
                    <Descriptions.Item label="Category">{product.category}</Descriptions.Item>
                    <Descriptions.Item label="Product">{product.title}</Descriptions.Item>
                    <Descriptions.Item label="Amount">${product.price}</Descriptions.Item>
                    <Descriptions.Item label="Description">{product.description}</Descriptions.Item>
                    <Descriptions.Item label="Contact the Seller">{product.sellersEmail}</Descriptions.Item>
                </Descriptions>
                    <br />

               
                
                {
                    isInCart(product) ?
                    <Button 
                    onClick={() => 
                        increase(product)  
                        }
                    type="primary"
                    shape="round">Add on to Cart</Button>
                    : ""
                }
    {console.log(isInCart(product))}

                {
                    !isInCart(product) ? 
                    <Button 
                    onClick={() => {
                        handleClick(product)
                        addProduct(product)
                        
                    }}
                    type="primary"
                    shape="round">Add to Cart</Button>
                    :  ""
                }

            </Col>

           

    </Row>
               
        </div>
    )
}



export default ProductPage
