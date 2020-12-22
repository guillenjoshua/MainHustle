import React, {useEffect, useState} from 'react'
import Axios from 'axios'; 
// import {Carousel, Card} from 'antd'; 
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'


const FrontPage = () => {

    const [products, setProducts] = useState([]);

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


    const images = [
        {
          original: 'https://picsum.photos/id/119/1000/600/',
          thumbnail: 'https://picsum.photos/id/119/250/150/',
        },
        {
          original: 'https://picsum.photos/id/486/1000/600/',
          thumbnail: 'https://picsum.photos/id/486/250/150/',
        },
        {
          original: 'https://picsum.photos/id/96/1000/600/',
          thumbnail: 'https://picsum.photos/id/96/250/150/'
        },
        {
          original: 'https://picsum.photos/id/367/1000/600/',
          thumbnail: 'https://picsum.photos/id/367/250/150/'
        },
      ];

    return (
        <div>
          <br />
          <h5 style={{textAlign: "center"}}>Welcome to MainHustle</h5>
          <h5 style={{textAlign: "center"}}>A secure place to easily List, Sell and Search for Products  </h5>
          <br />
          <br />
            <ImageGallery  items={images} />
            <h7 style={{textAlign: "center"}}>With MainHustle, you can create a listing for a product you want to sell, other users will be able to view your listing and purchase your product!
            
            </h7>
        </div>
    )
}

export default FrontPage; 