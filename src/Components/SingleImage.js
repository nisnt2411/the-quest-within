import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { useParams } from 'react-router-dom';
import imageUrlBuilder from '@sanity/image-url';
import NavBar from './NavBar';
import './SingleImage.css';

const builder = imageUrlBuilder(sanityClient);

const urlFor = source => (builder.image(source));

const SingleImage = props => {
    const [singleImage, setSingleImage] = useState(null);
    const { slug } = useParams();
    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            description,
            "name": author->name,
            "authorImage": author->image
        }`)
        .then((data) => setSingleImage(data[0]))
        .catch(console.error)
    },[slug])
    if(!singleImage){
        return(
            <div>
                <NavBar/>
                <div>Loading...</div>
            </div>
        )
    }
    return(
        <div>
            <NavBar/>
            <div className="container-fluid">
                <div className="container img-container">
                    <img src={singleImage.mainImage.asset.url} alt="#" className="img-fluid"/>
                </div>
                <div className="container description">
                </div>                
            </div>
        </div>
        
    )
}

export default SingleImage;