
import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';



function ProdPageImage({product}) {

    const [Images, setImages] = useState([]);
    console.log(Images)

    useEffect = (() => {

        if (product.image && product.image.length > 0) {
            let product = [];

            product.image && product.image.map(item => {
                product.push({
                    original: `${item}`,
                    thumbnail: `${item}`
                })
            })
            setImages(product)
        }
    }, [product])



    return (
        <div>
            <ImageGallery product={Images} />
        </div>
    )
}

export default ProdPageImage
