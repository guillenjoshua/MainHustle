import React, {useEffect, useState} from 'react';
import Axios from 'axios'; 
import { Row, Col, Card, Carousel } from 'antd';
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

        // if( process.env.NODE_ENV === "production") {
        //     // If on heroku use one path
        //     let deployeImageUrl= picture[picture.length-1].split("build")
        //     imageSrc = pictureTwo[pictureTwo.length-1]
        //   } else {
        //     // If local use other path
        //     imageSrc = `/uploads/${picture[picture.length-1]}`
        //   }

            return (

            <Col lg={6} md={8} xs={18}>
                <Card 
                hoverable={true}
                style={{width: 200}}
                cover={<a href={`/product/${product._id}`}>

                    {<img style={{width: '100%'}} alt="ProductImg" src={`${pictureTwo[pictureTwo.length-1]}`} />}

                    {/* <Carousel autoplay>
                        {picture.map((image, index) => (
                        <div key={index}>
                            <img style={{ width: '100%', maxHeight: '150px' }}
                            src={`${image}`} alt="productImage" />
                        </div>
                        ))}
                    </Carousel> */}



                  
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