import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import sanityClient from '../client.js';
import NavBar from './NavBar';
import Loader from './Loader';
import './Home.css';
const Home = props => {
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
              },
              description
          }`
      )
      .then((data) => {
          const post1 = Math.floor(Math.random() * data.length);;
          let post2 = post1;
          while(post1 === post2){
            post2 = Math.floor(Math.random() * data.length);
          }
          const selectedPost = [];
          selectedPost.push(data[post1]);
          selectedPost.push(data[post2]);
          setPost(selectedPost);
      })
      .catch((error) => console.log(error))
  },[])
  if(!postData) return <Loader/>
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
      <h2>Quote of the day</h2>
      <p>what a restless soul want is an adventure.</p>
      </div>
  </aside>
    <div className="blog">
      {postData && postData.map(post => (
          <div className="conteudo" key={post.title}>
          <div className="post-info">
            Posted by Nishant
          </div>
          <img className="card-img-top" src={post.mainImage.asset.url} alt={post.title}/>
          <h1>{post.title}</h1>
          <hr/>
          <p>
            {post.description}
          </p>
          <Link className="LINK" to={"/post/"+post.slug.current}><p href="/post/" className="continue-lendo">Read more →</p></Link>
        </div>
      ))}
  </div>
</div>
</div>
    );
}
export default withRouter(Home);
