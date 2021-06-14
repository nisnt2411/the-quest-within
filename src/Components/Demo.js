import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { useParams, Link } from 'react-router-dom';
import NavBar from './NavBar';
import './SinglePost.css';
import Loader from './Loader';
import './Demo.css';
// img ratio 0.716
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
    if(!postData) return <Loader/>
    return(
        <div>
            <NavBar/>
            <h1>Recent Posts...</h1>
            <div class="wrap-post">
                {postData && postData.map(post => (
                      <div class="box" onClick={()=>HandleRoute("/post/"+post.slug.current)} key={post.mainImage.asset._id}>
                      <div class="box-top">
                        <img class="box-image" src={post.mainImage.asset.url} alt={post.title}/>
                        <div class="title-flex">
                          <h4 class="box-title">{post.title}</h4>
                          <p class="user-follow-info date">21/4/2021</p>
                        </div>
                        <p class="description">{post.description}</p>
                      </div>
                      <Link class="button a"><a className="a" href="#" >Read More</a></Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Demo;
