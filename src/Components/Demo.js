import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import './SinglePost.css';
import Loader from './Loader';
import './Demo.css';
//                     <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt=""/>
const Demo = props => {
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
  if(!singlePost) return <Loader/>
    return(
        <div>
            <NavBar/>
        </div>
    );
}
export default Demo;
