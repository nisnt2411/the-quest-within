import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
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
        <div>
            <NavBar/>
            <div className="container">
            <h1>Recent Posts...</h1><hr/>
          <div className="grid-row">
          {postData && postData.map(post =>(
                          <div onClick={()=>HandleRoute("/post/"+post.slug.current)} key={post.mainImage.asset._id}  className="grid-item">
                          <div className="grid-item-wrapper">
                            <div className="grid-item-container">
                              <div className="grid-image-top rex-ray">
                              <img className="img-post" src={post.mainImage.asset.url} alt=""/>
                              </div>
                              <div className="grid-item-content">
                                <span className="item-title">{post.title}</span>
                                <span className="item-category">Infrastructure as Code</span>
                                <span className="item-excerpt">
                                    {post.description}
                                </span>
                                <span className="more-info">Read more <i class="fas fa-long-arrow-alt-right"></i></span>
                              </div>
                            </div>
                          </div>
                        </div>
            ))}
        </div>
        </div>
        </div>
    );
}

export default withRouter(Post);