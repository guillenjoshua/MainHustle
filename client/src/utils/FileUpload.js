import React, {useState} from 'react'
import { CloudUploadOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
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
        //save the Image we chose inside the Node Server 
        Axios.post('/api/product/uploadImage', formData, config)
            .then(response => {
                if (response.data.success) {
                    setImage([...image, response.data.image])
                    props.refreshFunction([...image, response.data.image])
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
                    <div style={{width: '100px', height: '100px', border: '1px solid lightgray', cursor: 'pointer'}} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <div style={{ width: '50px', height: '50px'}} >
                            <CloudUploadOutlined />
                            <div >Upload</div>
                        </div>
                    </div>
                )}
            </Dropzone>

            <div style={{ display: 'flex', width: '100px', height:'100px' }}>
                    {image.map((image, index) => (
                    <div>
                        {/* <Upload listType="picture-card" fileList={image} /> */}
                        {/* <Modal visible={image} /> */}
                        <img  style={{ width: '100px', height: '100px'}}   src={`/${image}`} alt={`productImg-${index}`} />
                    </div>
                    ))}
            </div>    

        </div>
    )
}

export default FileUpload
