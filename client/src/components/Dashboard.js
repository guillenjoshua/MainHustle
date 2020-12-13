import React, {useEffect, useState} from 'react';
import Axios from 'axios'; 
import { Row, Col, Card } from 'antd';

const {Meta} = Card;

const Dashboard = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {

        Axios.get("/api/product/getProducts")
        .then(response => {
            console.log(response)
            if (response.data.success) {
                setProducts(response.data.product)

                console.log(response.data.product)

            } else {
                alert('No Products Available')
            }
        })

    }, [])



    const renderCards = products.map((product, index) => {
             
        let  picture = product.image.join("").split("\\")
            return (

            <Col lg={6} md={8} xs={18}>
                <Card 
                hoverable={true}
                style={{width: 200}}
                cover={<a href={`/product/${product._id}`}>
                    {<img style={{width: '100%'}} alt="ProductImg" src={`/uploads/${picture[picture.length-1]}`} />}
                </a>}
                >
                    
                <Meta 
                title={product.title}
                description={`$${product.price}`}
                />

                </Card>
            </Col>
            )
         })
    
    return(
        <div>
           <br />
           <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            Welcome To Your Dashboard
            </div>
            {products.length === 0 ?
            <div> 
                Nothing To Show Right Now
            </div> :
            <div>
                <Row gutter={[16, 24]}>
                {renderCards}
                </Row>
            </div>
             } 
        </div>
    )
}


export default Dashboard; 