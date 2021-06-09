import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { useParams, Link } from 'react-router-dom';
import NavBar from './NavBar';
import './SinglePost.css';

const SinglePost = props => {
    const [singlePost, setSinglePost] = useState(null);
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
        .then((data) => setSinglePost(data[0]))
        .catch(console.error)
    },[slug])
    if(!singlePost){
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
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className="img-fluid"/>
                </div>
                <div className="container description">
                <h3 className="title">{singlePost.title}</h3>
                <p className="paragraph">{singlePost.description}</p>
                </div>
                <div className="bottom">
                    <Link to="/post"><button className="btn btn-info btn-block">Go Back</button></Link> 
                </div>            
            </div>
        </div>
        
    )
}

export default SinglePost;