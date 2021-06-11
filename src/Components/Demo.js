import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import sanityClient from '../client.js';
import NavBar from './NavBar';
import './Demo.css';

const Demo = props => {
    const [GallaryData, setGallary] = useState(null);

    function HandleRoute (path) {
        props.history.push(path)
    }

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "gallary"]{
            title,
            slug,
            mainImage{
                asset->{
                    url,
                    _id
                },
                alt
            },
            credit
        }`)
        .then((data) => {
            console.log(data);
            setGallary(data);
        })
        .catch(console.error)
    },[]);

    if(!GallaryData) return <div>Loading...</div>

    return(
        <div className="">
                        <NavBar/>
            <h1>Responsive Image Gallery</h1><hr/>
            <div id="gallery"  class="container-fluid">  
  <img src="https://source.unsplash.com/1600x1200?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/1024x768?female,portrait" class="img-responsive"/>
   <img src="https://source.unsplash.com/1366x768?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/1920x1080?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/640x360?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/320x640?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/1200x1600?female,portrait" class="card img-responsive"/>
  <img src="https://source.unsplash.com/800x600?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/600x800?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/400x600?female,portrait" class="img-responsive"/>
  <img src="https://source.unsplash.com/600x400?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/1100x1600?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/1600x1100?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/992x768?female,portrait" class="img-responsive"/>
<img src="https://source.unsplash.com/768x992?female,portrait" class="img-responsive"/>
<img src="/images/elon_musk.jpeg" class="img-responsive"/>
<img src="/images/me.jpeg" class="img-responsive"/>
<img src="/images/doge.jpeg" class="img-responsive"/>
<img src="/images/my_photo.jpg" class="img-responsive"/>
</div>
</div>
    );
}
export default withRouter(Demo);