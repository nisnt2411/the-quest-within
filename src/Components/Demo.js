import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import sanityClient from '../client.js';
import NavBar from './NavBar';
import './Demo.css';
//                     <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt=""/>
const Demo = props => {
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
export default withRouter(Demo);