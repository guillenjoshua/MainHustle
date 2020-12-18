import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import Spinner from './Spinner' 
import { Row, Col, Card } from 'antd';
// import DashboardCarousel from '../utils/DashboardCarousel'
import { Input } from 'antd';

const { Search } = Input;

const {Meta} = Card;

const Dashboard = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState(""); 
    

    useEffect(() => {
       
     

            Axios.get("/api/product/getProducts")
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    setProducts(response.data.product)
                    console.log(response.data.product)
                } 
            })

    }, [])



    
    const filteredCards = products.filter( product => {
        return product.title.toLowerCase().includes( search.toLowerCase())
    })



    const renderCards = filteredCards.map((product, index) => {
             
        let  picture = product.image.join("").split("\\")
        console.log(picture)
        let pictureTwo = picture[picture.length-1].split("build")

            return (

            <Col lg={6} md={8} xs={18}>
                <Card 
                hoverable={true}
                style={{width: 200}}
                cover={<a href={`/product/${product._id}`}>
                  
                    {<img style={{width: '100%'}} alt="ProductImg" src={`${pictureTwo[pictureTwo.length-1]}`} />}

                    {/* <DashboardCarousel images={product.images}/> */}
                  
                </a>}
                >
               
                <Meta 
                
                title={product.title}
                description={`$${product.price}`}
                category={product.category}

                />

                </Card>
            </Col>
            )
         })



    
    return(
        <div>
           <br />
           <div style={{textAlign: 'center', marginBottom: '3rem', fontWeight: "bold"}}>
            Search MainHustle Products
            </div>

            {/* SearchBar */}
            <div>
                <Search
                className="input"
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
            </div>




            {products.length === 0 ?
            <div> 
                Nothing To Show Right Now
                <Spinner />
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