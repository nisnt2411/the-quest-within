import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import NavBar from './NavBar';
import './SinglePost.css';
import Loader from './Loader';
import './Demo.css';
// img ratio 0.716
const Demo = props => {
    const [postData, setPost] = useState(null);
    useEffect(() => {
        sanityClient
        .fetch(
            `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                description
            }`
        )
        .then((data) => {
            setPost(data);
        })
        .catch((error) => console.log(error))
    },[])
    if(!postData) return <Loader/>
    return(
    <div className="container-fluid">
        <NavBar/>
    </div>
    )
}
export default Demo;
