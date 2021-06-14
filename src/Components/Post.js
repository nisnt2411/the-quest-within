import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import sanityClient from '../client.js';
import NavBar from './NavBar';
import Loader from './Loader';
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
                description,
                _createdAt
            }`
        )
        .then((data) => {
            setPost(data);
        })
        .catch((error) => console.log(error))
    },[])
    if(!postData) return <Loader/>

    return(
        <div>
            <NavBar/>
            <h1>Recent Posts...</h1>
            <div className="wrap-post">
                {postData && postData.map(post => (
                      <div className="box" onClick={()=>HandleRoute("/post/"+post.slug.current)} key={post.mainImage.asset._id}>
                      <div className="box-top">
                        <img className="box-image" src={post.mainImage.asset.url} alt={post.title}/>
                        <div className="title-flex">
                          <h4 className="box-title">{post.title}</h4>
                          <p className="user-follow-info date">{post._createdAt}</p>
                        </div>
                        <p className="description">{post.description}</p>
                      </div>
                      <Link to={"/post/"+post.slug.current} className="button a">Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default withRouter(Post);