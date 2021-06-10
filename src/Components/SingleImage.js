import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { useParams, Link } from 'react-router-dom';
import NavBar from './NavBar';
import './SingleImage.css';

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
            credit,
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
                    <img src={singleImage.mainImage.asset.url} alt={singleImage.title} className="img-fluid"/>
                </div>
                <div className="container description">
                    <h4>{singleImage.title}</h4>
                    <div className="credit">
                    <figure>
                    <figcaption className="blockquote-footer">
                        <cite title="Source Title">{singleImage.credit}</cite>
                    </figcaption>
                    </figure>
                    </div>
                 </div>
                <div className="bottom">
                    <Link to="/gallary"><button className="btn btn-info btn-block">Go Back</button></Link> 
                </div>                  
            </div>
        </div>
        
    )
}

export default SingleImage;