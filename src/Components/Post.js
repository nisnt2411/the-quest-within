import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
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
        <div>
            <NavBar/>
            <div class="container">
            <h1>Recent Posts...</h1><hr/>
          <div class="grid-row">
          {postData && postData.map(post =>(
                          <div onClick={()=>HandleRoute("/post/"+post.slug.current)} key={post.mainImage.asset._id}  class="grid-item">
                          <div class="grid-item-wrapper">
                            <div class="grid-item-container">
                              <div class="grid-image-top rex-ray">
                              <img className="img-post" src={post.mainImage.asset.url} alt=""/>
                              </div>
                              <div class="grid-item-content">
                                <span class="item-title">{post.title}</span>
                                <span class="item-category">Infrastructure as Code</span>
                                <span class="item-excerpt">
                                    {post.description}
                                </span>
                                <span class="more-info">Read more <i class="fas fa-long-arrow-alt-right"></i></span>
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