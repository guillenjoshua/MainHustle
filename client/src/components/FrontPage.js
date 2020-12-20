import React, {useEffect, useState} from 'react'
import Axios from 'axios'; 
import {Carousel, Card} from 'antd'; 
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
          original: 'https://picsum.photos/id/24/1000/600/',
          thumbnail: 'https://picsum.photos/id/24/250/150/',
        },
        {
          original: 'https://picsum.photos/id/1019/1000/600/',
          thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
      ];

    return (
        <div>
            <ImageGallery  items={images} />;
        </div>
    )
}

export default FrontPage; 