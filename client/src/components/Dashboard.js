import React, {useEffect, useState} from 'react'
import API from '../utils/Api'



const Dashboard = () => {

    const [user, setUser] = useState(); 
    const [products, setProducts] = useState([]);
    const [error, setError] = useState("");


    useEffect((user) => {

        API.getCurrentUser()
        .then(res => {
            
            setProducts(res.data.products)
        })
        .catch(err => setError(err))

    }, [user])


    const renderedProducts = products.map((result) => {
        return (
            <div className='item'>
                <div className='content'>
                    {result.products}
                </div> 
            </div>
        )
    })
    
    return(
        <div>
            <div className='ui celled list'>
          This is the Dashboard
          {renderedProducts}
            </div>
        </div>
    )
}


export default Dashboard; 