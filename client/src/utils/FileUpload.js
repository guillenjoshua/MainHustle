import React, {useState} from 'react'
import { CloudUploadOutlined } from '@ant-design/icons';
import Dropzone from 'react-dropzone';
import Axios from 'axios';

function FileUpload(props) {


    const [image, setImage] = useState([])



    
    const onDrop = (file) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", file[0])
        //save image inside the Node Server 
        Axios.post('/api/product/uploadImage', formData, config)
            .then(response => {
                if (response) {  //response.data.success
                    setImage([...image, response.data.image])
                    props.refreshFunction([...image, response.data.image])
                } else {
                     alert('Failed to save the Image in Server')
                }
            })
    
        }

    return (
        <div>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{width: '100px', height: '100px', border: '1px solid lightgray',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: "rgba(1,1,1,0.3)", borderRadius: "10px"}} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div style={{ width: '50px', height: '50px'}} >
                            <CloudUploadOutlined style={{ fontSize: '3.2rem', cursor: "pointer" }}/>
                            <div >Upload</div>
                        </div>
                    </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '100px', height:'100px' }}>
                    {image.map((image, index) => {

                // Code that works with Dev/prod If Statement
                // let  picture = image.split("\\")
                // let imageSrc = ""
                // // console.log(picture)
                // // let pictureTwo = picture[picture.length-1].split("build")

                // if( process.env.NODE_ENV === "production") {
                //     // If on heroku use one path
                //     let deployeImageUrl= picture[picture.length-1].split("build")
                //     imageSrc = deployeImageUrl[deployeImageUrl.length-1]
                // } else {
                //     // If local use other path
                    
                //     let pictureTwo = picture[picture.length-1].split("public")
                //     imageSrc = encodeURI(pictureTwo[pictureTwo.length-1])
                // }

                //Original code that works on Heroku
                    let  picture = image.split("\\")
                    let pictureTwo = picture[picture.length-1].split("build")
                    console.log(picture)
                         

                 return   <div>
                     
                     <img  style={{ width: '100px', height: '100px', disply: 'none'}}   src={pictureTwo[pictureTwo.length-1]} alt={`productImg-${index}`} />

                        {/* Code that works with Dev/prod If Statement */}
                        {/* <img  style={{ width: '100px', height: '100px', disply: 'none'}}   src={imageSrc} alt={`productImg-${index}`} /> */}

                    </div>
                    } ) }
            </div>    

        </div>
    )
}


export default FileUpload
