import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import NavBar from './NavBar';
import './Post.css';

const Post = props => {
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
                }
            }`
        )
        .then((data) => setPost(data))
        .catch((error) => console.log(error))
    },[])
    return(
        <div className="row">
            <NavBar/>
            {postData && postData.map(post =>(
            <div className="card post-card">
                <img className="card-img-top" src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <Link className="btn btn-success">Go To post</Link>
                </div>
            </div>
            ))}
        </div>
    )
}

export default Post;