import React, {useState, useEffect, useContext} from 'react'
import Axios from 'axios'
import {Row, Col, Descriptions, Button } from 'antd'
// import ImageGallery from 'react-image-gallery';
import  {CartContext} from '../contexts/CartContext';
// import ProdPageImage from './ProdPageImage'


function ProductPage(props) {

 
    const productId = props.match.params.productId
    const [product, setProduct] = useState([])
    const { addProduct, cartItems, increase } = useContext(CartContext);


    useEffect(() => {

        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
                console.log(response.data[0])
            })
    },[])

   




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
            <Col lg={12} xs={24}>
                    Product Image
               {/* <ImageGallery  items={image}/> */}
                <img style={{width: '100%'}} alt="ProductImg" src={`${product.image}`} /> 
                {/* <ProdPageImage product={product} />
                 */}
            </Col>


            <Col lg={12} xs={24}>



                <Descriptions
                    title="Item Info"
                    bordered
                    layout="vertical"
                    >
                    <Descriptions.Item label="Category">{product.category}</Descriptions.Item>
                    <Descriptions.Item label="Product">{product.title}</Descriptions.Item>
                    <Descriptions.Item label="Amount">${product.price}</Descriptions.Item>
                    <Descriptions.Item label="Description">{product.description}</Descriptions.Item>
                </Descriptions>
                    <br />

               
                
                {
                    isInCart(product) && 
                    <Button 
                    onClick={() => increase(product)}
                    type="primary"
                    shape="round">Add on to Cart</Button>
                }


                {
                    !isInCart(product) && 
                    <Button 
                    onClick={() => addProduct(product)}
                    type="primary"
                    shape="round">Add to Cart</Button>
                }

            </Col>

           

    </Row>
               
        </div>
    )
}



export default ProductPage
