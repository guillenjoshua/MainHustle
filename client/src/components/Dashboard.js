import React, {useEffect, useState} from 'react';
import Axios from 'axios'; 
import { Row, Col, Card, } from 'antd';
import { Input } from 'antd';
import {Link} from 'react-router-dom'
const { Search } = Input;

const {Meta} = Card;

const Dashboard = () => {

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState(""); 
    

    useEffect(() => {
       
            Axios.get("/api/product/getProducts")
            .then(response => {
                if (response.data.success) {
                    setProducts(response.data.product)
                } 
            })

    }, [])

    
    const filteredCards = products.filter( product => {
        return product.title.toLowerCase().includes( search.toLowerCase())
    })



    const renderCards = filteredCards.map((product, index) => {
             
        // Code that works with Dev/Prod if Statement
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
        //     imageSrc = encodeURI(`${pictureTwo[pictureTwo.length-1]}`)
        //   }

        //This is the original code that works on heroku
            let  picture = product.image.join("").split("\\")
            console.log(picture)
            let pictureTwo = picture[picture.length-1].split("build")



            return (

            <Col lg={6} md={8} xs={18}>
                <Card 
                hoverable={true}
                style={{width: 200}}
                cover={<Link to={`/product/${product._id}`}>

                    {/* This is the original code that works on heroku */}
                    {<img style={{width: '100%'}} alt="ProductImg" src={`${pictureTwo[pictureTwo.length-1]}`} />}

                    {/* Code that works with Dev/Prod if Statement */}
                    {/* {<img style={{width: '100%'}} alt="ProductImg" src={`${imageSrc}`} />} */}
                   
                  
                </Link>}
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

            <br />
            <br />

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