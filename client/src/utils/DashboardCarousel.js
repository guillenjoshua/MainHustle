import React from 'react'
import {Carousel} from 'antd'; 

function DashboardCarousel(props) {
    return (

        <div>
            <Carousel autoplay>
            {props.images.map((image, index) => {
                    <div key={index}>
                        <img style={{ width: '100%', maxHeight: '150px' }}
                            src={`/uploads/${image.join("").split("\\")[image.join("").split("\\").length-1]}`} alt="productImage" />
                    </div>
                })}


            </Carousel>
        </div>
    )
}

export default DashboardCarousel; 
