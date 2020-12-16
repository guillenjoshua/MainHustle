import React, {useState, useEffect, useContext} from 'react'
import Axios from 'axios'
import {Row, Col, Descriptions, Button, Card} from 'antd'
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import  {CartContext} from '../contexts/CartContext';



// import Form from "usetheform";
// import Cart from './Cart'

function ProductPage(props) {


    const productId = props.match.params.productId
    const [product, setProduct] = useState([])
    const [image, setImage] = useState([])
    const [cart, setCart] = useState([])
    // const [items, setCartItem] = useState([]);
    const { addProduct, cartItems } = useContext(CartContext);


    

    console.log(cart)

    useEffect(() => {

        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })


            // if (product.image && product.length > 0) {
            //     let images =[]
    
            //     product.image && product.image.map(item => {
            //         image.push({
            //                 original: `/uploads/${product.image.join("").split("\\")[product.image.join("").split("\\").length-1]}`,
            //                 thumbnail: `/uploads/${product.image.join("").split("\\")[product.image.join("").split("\\").length-1]}`
            //         })
            //     })
            //         setImage(images)
            // }

    },[])


    // const onSubmit = (event) => {
    //     event.preventDefault();

    //     const variables = {
    //         user: props.user.userData_id, 
    //         cart: product
    //     }
    

    //     Axios.post('/api/user/cart', variables)
    //         .then(response => {
    //             if (response.data.success) {
    //                 alert('Successfully Added to Cart')
    //                 // props.history.push('/dashboard')
    //             } else {
    //                 alert('Failed to add to cart')
    //             }
    //         })
    // }








    // const ProductPictures = () => {

    // useEffect(() => {

    //     if (product.image && product.length > 0) {
    //         let images =[]

    //         product.image && product.image.map(item => {
    //             image.push({
    //                     original: `/uploads/`,
    //                     thumbnail: `/uploads/`
    //             })
    //         })
    //             setImage(images)
    //     }

    // },[product])

    // }

    // const renderImage = product.map((prod, index) => {
    //     let  picture = prod.image.join("").split("\\")

    // return (
    //     <div>
    //         <img style={{width: '100%'}} alt="ProductImg" src={`/uploads/${picture[picture.length-1]}`} />
    //     </div>
    // )        
    // })


    // Add to Cart Function Working...Do Not delete
    // const addToCart = (product) => {
    //     setCart([...cart, product])
    // }



    //Add to Cart....Do Not delete
    // const cartProducts = cart.map(() => {
    //     <div key={productId}>
    //         {`${product.title} : $${product.price}`}
    //     </div>
    // })



    // const onRemoveItem = (idToRemove) =>
    // setCart((prev) => prev.filter(({ id }) => id !== idToRemove));

//   const addToCart = () => {
//     setCartItem((prev) => [...prev, product]);
//   };

//   const onChange= (state, isFormValid) => console.log('CHANGE', state, isFormValid);
//   const onSubmit= (state) => console.log('SUBMIT', state);

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
        }

    // let  picture = product.image.join("").split("\\")

    const renderImage = (product, index) => {
             
        let  picture = product.image.join("").split("\\")
        
            return (

            <Col lg={6} md={8} xs={18}>
                <Card 
                hoverable={true}
                style={{width: 200}}
                cover={<a href={`/product/${product._id}`}>
                  
                    {<img style={{width: '100%'}} alt="ProductImg" src={`/uploads/${picture[picture.length-1]}`} />}

                    {/* <DashboardCarousel images={product.images}/> */}
                  
                </a>}
                >

                </Card>
            </Col>
            )
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
               <ImageGallery  items={image}/>
            
                {renderImage}
            </Col>


            <Col lg={12} xs={24}>


            {/* <div className="App">
                <Form onChange={onChange} onSubmit={onSubmit}>
                    <Cart items={cart} onRemoveItem={onRemoveItem} />
                    <Button type="primary" shape="round">Submit</Button>
                </Form>
                <br />
                <Button type="primary" shape="round" onClick={addToCart}>
                    Add to Cart
                </Button>
            </div> */}

                <Descriptions
                    title="Item Info"
                    bordered
                    column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                    >
                    <Descriptions.Item label="Category">{product.category}</Descriptions.Item>
                    <Descriptions.Item label="Product">{product.title}</Descriptions.Item>
                    <Descriptions.Item label="Amount">${product.price}</Descriptions.Item>
                    <br />
                    <Descriptions.Item label="Decription">{product.description}</Descriptions.Item>
                </Descriptions>
                    <br />

                {/* <Button type="primary" shape="round" onClick={() => addToCart(product)}>Add to Cart</Button> */}
                {
                    !isInCart(product) && 
                    <Button 
                    onClick={() => addProduct(product)}
                    type="primary"
                    shape="round">Add to cart</Button>
                }

            </Col>

           

    </Row>
               
        </div>
    )
}



export default ProductPage
