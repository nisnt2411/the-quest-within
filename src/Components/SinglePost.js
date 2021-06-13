import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import Loader from './Loader';
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
                <Loader/>
            </div>
        )
    }
    return(
        <div>
            <NavBar/>
<div className="wrap">
    <aside className="sidebar">
    <div className="widget">
      <h2>Nishant</h2>
      <p>Hello, my name’s Nishant. I’m 21 years old. I work as a Web Designer.<br/> myself@gmail.com</p>
      </div>
      <div className="widget">
      <h2>{singlePost.title}</h2>
      </div>
  </aside>
    <div className="blog">
          <div className="conteudo">
          <div className="post-info">
            Posted by Nishant
          </div>
          <img className="card-img-top" src={singlePost.mainImage.asset.url} alt={singlePost.title}/>
          <h1>{singlePost.title}</h1>
          <hr/>
          <p>
            {singlePost.description}
          </p>
          <div className="more-posts">
              <a href="/post">See more posts</a>
          </div>
        </div>
  </div>
</div>
        </div>
        
    )
}

export default SinglePost;