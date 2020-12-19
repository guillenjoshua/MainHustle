import React, {useState, useEffect} from 'react'
import FileUpload from '../utils/FileUpload'
import Axios from "axios"; 
import {Button} from 'antd'



const Category = [
     { key: 1, value: "Electronics"},
     { key: 2, value: "Computers "},
     { key: 3, value: "Outdoors"},
     { key: 4, value: "Sporting Goods"},
     { key: 5, value: "Art/Carpentry"},
     { key: 6, value: "Books"},
     { key: 7, value: "Video Games"},
     { key: 8, value: "Movies/Music"},
     { key: 9, value: "Clothing"},
]

function ProductUpload(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0); 
    const [category, setCategory] = useState(1)
    const [image, setImage] = useState(); 
    const [user, setUser] = useState(); 


    useEffect(() => {

        Axios.get(`/api/current_user`)
            .then(response => {
                setUser(response.data)
                // console.log(response.data)
            })

    }, [])

 




    const onTitleChange = (event) => {
        setTitle(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescription(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPrice(event.currentTarget.value)
    }

    const onCategoryChange = (event) => {
        setCategory(event.currentTarget.value)
    }


    const onUpdateImage = (newImage) => {
        setImage(newImage)
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            user: user._id, 
            title: title,
            description: description,
            price: price,
            image: image,
            category: category,
        }
    

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Product Successfully Uploaded')
                    props.history.push('/dashboard')
                } else {
                    alert('Failed to upload Product')
                }
            })
    }







    return (
        <div>
            <br />
            <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                <h4>Upload Yo MainHustle Product</h4>
            </div>

      
            <form onSubmit={onSubmit}>

            
            <br />

            <label>Item Name</label>
            <input 
                onChange={onTitleChange}
                value={title}
            />

            <br />

            <label>Description</label>
                <textarea 
                    onChange={onDescriptionChange}
                    value={description}
                />
                <br />
                <br />
                <label>Price($)</label>
                <input
                    onChange={onPriceChange}
                    value={price}
                    type="number"
                />
                <br /><br />
                <label>Select Category</label>
                <select className="browser-default" onChange={onCategoryChange} value={category}>
                    {Category.map(item => (
                        <option key={item.key} value={item.value}>{item.value}</option>
                    ))}
                </select>

                <br />
                <br />

                <label>Upload Image</label>
                <br />

                <FileUpload refreshFunction={onUpdateImage}  />

                <br />
                <br />
                <Button type="primary" shape="round" onClick={onSubmit}>Submit</Button>

            </form>

        </div>
    )
}

export default ProductUpload;
