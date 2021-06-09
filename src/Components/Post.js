import React, { useState, useEffect } from 'react';
import { Link, useHistory, withRouter } from 'react-router-dom';
import sanityClient from '../client.js';
import NavBar from './NavBar';
import './Post.css';

const Post = props => {
    const [postData, setPost] = useState(null);

    function HandleRoute (path) {
        props.history.push(path)
    }
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
    if(!postData) return <div>Loading...</div>
    return(
        <div className="row background-post">
            <NavBar/>
            {postData && postData.map(post =>(
            <div onClick={()=>HandleRoute("/post/"+post.slug.current)} key={post.mainImage.asset._id} className="card post-card">
                <img className="card-img-top" src={post.mainImage.asset.url} alt={post.mainImage.alt}/>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="post-description">{post.description}</p>
                </div>
            </div>
            ))}
        </div>
    )
}

export default withRouter(Post);