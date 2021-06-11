import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import sanityClient from '../client.js';
import NavBar from './NavBar';
import './Gallary.css';

const Gallary = props => {
    const [GallaryData, setGallary] = useState(null);

    function HandleRoute (path) {
        props.history.push(path)
    }

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "gallary"]{
            title,
            slug,
            mainImage{
                asset->{
                    url,
                    _id
                },
                alt
            },
            credit
        }`)
        .then((data) => {
            console.log(data);
            setGallary(data);
        })
        .catch(console.error)
    },[]);

    if(!GallaryData) return <div>Loading...</div>

    return(
        <div>
            <NavBar/>
            <h1>Welcome to our Image Gallery</h1><hr/>
            <div id="gallery"  className="container-fluid">
            {GallaryData && GallaryData.map(image =>(
            <img onClick={()=>HandleRoute("/gallary/"+image.slug.current)} key={image.mainImage.asset._id} src={image.mainImage.asset.url} alt={image.mainImage.title} className="img-responsive"/>
                ))
                }
            </div>
        </div>
    )
}


export default withRouter(Gallary);